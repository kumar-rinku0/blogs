import prisma from "@/lib/prisma";
import Form from "next/form";

export default function Home() {
  async function createPost(formData: FormData) {
    "use server";

    const data = Object.fromEntries(formData);
    console.log("Form Data Submitted:", data);

    const author = await prisma.user.create({
      data: {
        name: data.name as string,
        email: data.email as string,
      },
    });
    await prisma.post.create({
      data: {
        title: data.title as string,
        content: data.content as string,
        authorId: author.id,
      },
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form action={createPost} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your post title"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-lg mb-2">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            placeholder="Write your post content here..."
            rows={6}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-lg mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
        >
          Create Post
        </button>
      </Form>
    </main>
  );
}
