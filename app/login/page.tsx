"use client";

import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/users",
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="rounded-lg border p-8 text-center">
        <h1 className="mb-6 text-2xl font-bold">
          Zurich Customer Portal
        </h1>

        <button
          onClick={handleGoogleLogin}
          className="rounded-md bg-black px-6 py-3 text-white"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}