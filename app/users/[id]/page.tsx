import { getUserById } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";

type UserPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserDetailsPage({
  params,
}: UserPageProps) {
  const { id } = await params;

  const user = await getUserById(id);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 md:px-12">
      <header className="mb-8 flex items-center justify-between rounded-xl bg-white px-6 py-5 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">
          User Details
        </h1>

        <Link
          href="/users"
          className="font-medium text-gray-600 transition hover:text-blue-600"
        >
          Back to Users
        </Link>
      </header>

      <div className="mx-auto mt-12 max-w-lg rounded-2xl bg-white p-10 text-center shadow-sm">
        <Image
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          width={150}
          height={150}
          className="mx-auto rounded-full object-cover"
        />

        <h2 className="mt-5 text-2xl font-semibold text-gray-900">
          {user.first_name} {user.last_name}
        </h2>

        <p className="mb-3 mt-2 text-gray-600">
          {user.email}
        </p>

        <p className="text-sm text-gray-500">
          User ID: {user.id}
        </p>
      </div>
    </main>
  );
}