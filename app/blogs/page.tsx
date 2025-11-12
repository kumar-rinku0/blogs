import blogs from "@/data/blogs";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {blogs.map((blog) => (
        <div
          key={blog.url}
          className="max-w-2xl p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-md mb-6"
        >
          <h2 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
            {blog.title}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
            {blog.date}
          </p>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4">
            {blog.summary}
          </p>
          <a
            href={blog.url}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Read more
          </a>
        </div>
      ))}
    </div>
  );
}
