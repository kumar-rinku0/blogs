export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  console.log("Blog ID:", blogId);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
        Blog Post ID: {blogId}
      </h1>
    </div>
  );
}
