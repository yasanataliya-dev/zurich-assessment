import Image from "next/image";
import Link from "next/link";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { getUsers } from "@/lib/api";
import EmailToggle from "@/components/EmailToggle/EmailToggle";
import RefreshUsers from "@/components/RefreshUsers/RefreshUsers";
import { redirect } from "next/navigation";
import { getServerSession } from "@/lib/auth-server";

export default async function UsersPage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

  const users = await getUsers();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8 md:px-12">
      <Header title="Users" />

      <div className="mx-auto mt-6 flex max-w-7xl justify-end">
        <RefreshUsers />
      </div>

      <section className="mx-auto mt-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="group rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Image
                src={user.avatar}
                alt={`${user.first_name} ${user.last_name}`}
                width={70}
                height={70}
                className="rounded-full object-cover"
              />

              <h2 className="mt-4 text-lg font-semibold text-gray-900">
                {user.first_name} {user.last_name}
              </h2>

              <EmailToggle email={user.email} />

              <span className="mt-4 inline-block text-sm font-medium text-blue-600 group-hover:text-blue-800">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}