import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Understanding TypeScript Generics: A Deep Dive into Flexible and Reusable Code",
  description:
    "Learn everything about TypeScript generics — how to use them to write flexible, reusable, and type-safe code. A complete guide with examples.",
  keywords: [
    "TypeScript",
    "Generics",
    "Programming",
    "Web Development",
    "Type Safety",
    "Next.js",
  ],
  openGraph: {
    title:
      "Understanding TypeScript Generics: A Deep Dive into Flexible and Reusable Code",
    description:
      "A comprehensive guide to TypeScript generics. Learn how to write reusable, flexible, and type-safe code using one of TypeScript's most powerful features.",
    url: "https://yourblog.com/blog/typescript-generics",
    type: "article",
    images: [
      {
        url: "/images/typescript-generics-cover.jpg",
        width: 1200,
        height: 630,
        alt: "TypeScript Generics Blog Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Understanding TypeScript Generics: A Deep Dive into Flexible and Reusable Code",
    description:
      "A deep dive into TypeScript generics — learn how to use them effectively in real projects.",
    images: ["/images/typescript-generics-cover.jpg"],
  },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 bg-gray-50">
      <article className="prose prose-blue lg:prose-lg prose-headings:font-semibold prose-h1:text-4xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic prose-code:text-blue-600 prose-code:bg-blue-50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md">
        <h1 className="text-4xl font-bold mb-6">
          Understanding TypeScript Generics: A Deep Dive into Flexible and
          Reusable Code
        </h1>

        <div className="mb-8">
          <p>
            TypeScript has become the de facto standard for building robust,
            scalable, and maintainable JavaScript applications. One of its most
            powerful features — yet often misunderstood — is{" "}
            <strong>Generics</strong>.
          </p>

          <p>
            If you’ve ever repeated similar functions or struggled to maintain
            type safety when working with reusable code,
            <strong> TypeScript Generics</strong> are your best friend. In this
            article, we’ll explore what generics are, why they matter, and how
            to use them effectively in real-world projects.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-6">🔍 What Are Generics?</h2>
        <div className="mb-8 flex flex-col gap-1">
          <p>
            Generics allow you to create{" "}
            <strong>components that can work with any data type</strong>,
            without losing the benefits of strong typing. In simpler terms,{" "}
            <strong>
              generics make your code flexible and type-safe at the same time.
            </strong>
          </p>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
            <code>{`function identity(arg: any): any {
  return arg;
}`}</code>
          </pre>

          <p>The problem? You lose type info. Let’s fix it with generics:</p>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
            <code>{`function identity<T>(arg: T): T {
  return arg;
}`}</code>
          </pre>

          <p>✅ Type safety maintained, ✅ Reusability achieved.</p>
        </div>

        <h2 className="text-2xl font-bold mb-6">💡 Why Use Generics?</h2>
        <ul className="flex flex-col gap-1 mb-8">
          <li>
            <strong>Type Safety</strong> — Avoid <code>any</code> while keeping
            flexibility.
          </li>
          <li>
            <strong>Reusability</strong> — One function or class can handle
            multiple types.
          </li>
          <li>
            <strong>Readability</strong> — Makes type relationships explicit and
            clear.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-6">⚙️ Syntax of Generics</h2>
        <div className="mb-8 flex flex-col gap-1">
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-1">
            <code>{`function example<T>(param: T): T {
  return param;
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-6">
          🧩 Working with Generic Functions
        </h2>
        <div className="mb-8">
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-1">
            <code>{`function getArrayLength<T>(arr: T[]): number {
  return arr.length;
}`}</code>
          </pre>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-1">
            <code>{`const numbers = [1, 2, 3];
const strings = ['a', 'b', 'c'];

console.log(getArrayLength(numbers)); // 3
console.log(getArrayLength(strings)); // 3`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-6">🏗️ Generic Interfaces</h2>
        <div className="mb-8">
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-1">
            <code>{`interface ApiResponse<T> {
  status: number;
  data: T;
}`}</code>
          </pre>

          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-1">
            <code>{`interface User {
  id: number;
  name: string;
}

const response: ApiResponse<User> = {
  status: 200,
  data: { id: 1, name: 'John Doe' },
};`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-6">🏗️ Generic Classes</h2>
        <div className="mb-8">
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-1">
            <code>{`class DataStore<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-6">🎯 Generic Constraints</h2>
        <div className="mb-8">
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-1">
            <code>{`function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { id: 1, name: 'Alice' };
console.log(getProperty(user, 'name'));`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-6">
          ⚡ Real-World Example: Fetch API Wrapper
        </h2>
        <div className="mb-8">
          <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-1">
            <code>{`async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  const data = await response.json();
  return data as T;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

(async () => {
  const posts = await fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts');
  console.log(posts[0].title);
})();`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-bold mb-6">🚀 Best Practices</h2>
        <div className="mb-8">
          <ul className="flex flex-col gap-1">
            <li>Keep type parameter names short and meaningful.</li>
            <li>
              Avoid using <code>any</code> where generics can achieve
              flexibility.
            </li>
            <li>
              Use <code>extends</code> for safer generics.
            </li>
            <li>Don’t overuse generics — simplicity wins.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-6">🧩 Conclusion</h2>
        <div className="mb-8">
          <p>
            TypeScript generics unlock a world of <strong>flexibility</strong>,{" "}
            <strong>reusability</strong>, and <strong>type safety</strong>. They
            allow you to write code that adapts to multiple data types without
            sacrificing clarity or maintainability.
          </p>

          <blockquote>
            “Write once, type safely everywhere.” — That’s the power of
            TypeScript generics.
          </blockquote>
        </div>

        <p className="text-sm text-gray-500 mt-8 border-t pt-4">
          Author: <span className="font-semibold">Rinku Kumar</span> • © 2025{" "}
          <a href="#" className="text-blue-600 hover:underline">
            blogs.com
          </a>
        </p>
      </article>
    </main>
  );
}
