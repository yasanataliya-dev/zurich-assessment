import Image from "next/image";
import Link from "next/link";

import EmailToggle from "@/components/EmailToggle/EmailToggle";
import type { User } from "@/types/user";

type UsersListProps = {
  users: User[];
};

export default function UsersList({ users }: UsersListProps) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <Link
          key={user.id}
          href={`/users/${user.id}`}
          className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
        >
          <Image
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />

          <h2 className="mt-4 text-lg font-semibold text-gray-900">
            {user.first_name} {user.last_name}
          </h2>

          <EmailToggle email={user.email} />

          <span className="mt-4 inline-block text-sm font-medium text-blue-600">
            View details →
          </span>
        </Link>
      ))}
    </div>
  );
}