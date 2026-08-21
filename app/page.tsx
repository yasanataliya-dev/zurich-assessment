import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-6">
      <section className="w-full max-w-2xl rounded-2xl bg-white p-10 text-center shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900">
          User Management
        </h1>

        <p className="mt-4 text-gray-600">
          Manage and view user information securely.
        </p>

        <Link
          href="/users"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          View Users
        </Link>
      </section>
    </main>
  );
}