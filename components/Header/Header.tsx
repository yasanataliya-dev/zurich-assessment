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
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: "18px 24px",
        borderRadius: "10px",
        marginBottom: "30px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <h1
        style={{
          margin: 0,
          fontSize: "28px",
          fontWeight: 600,
        }}
      >
        {title}
      </h1>

      <button
        onClick={handleLogout}
        style={{
          border: "none",
          background: "transparent",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        Logout
      </button>
    </header>
  );
}