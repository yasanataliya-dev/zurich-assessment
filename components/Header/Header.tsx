"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <header className="mb-8 flex items-center justify-between rounded-xl bg-white px-6 py-5 shadow-sm">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>

      <button
        type="button"
        onClick={handleLogout}
        className="font-medium text-gray-600 transition hover:text-red-600"
      >
        Logout
      </button>
    </header>
  );
}