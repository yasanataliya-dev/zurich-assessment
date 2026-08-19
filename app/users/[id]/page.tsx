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

  const response = await fetch(
    `${process.env.BETTER_AUTH_URL}/api/users/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const result = await response.json();
  const user = result.data;

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f6f8",
        padding: "30px 50px",
      }}
    >
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
          }}
        >
          User Details
        </h1>

        <Link
          href="/users"
          style={{
            textDecoration: "none",
            color: "#333",
            fontWeight: 500,
          }}
        >
          Back to Users
        </Link>
      </header>

      <div
        style={{
          maxWidth: "500px",
          margin: "50px auto",
          backgroundColor: "#ffffff",
          borderRadius: "14px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
        }}
      >
        <Image
          src={user.avatar}
          alt={`${user.first_name} ${user.last_name}`}
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />

        <h2
          style={{
            marginTop: "20px",
            marginBottom: "8px",
          }}
        >
          {user.first_name} {user.last_name}
        </h2>

        <p
          style={{
            color: "#666",
            marginBottom: "10px",
          }}
        >
          {user.email}
        </p>

        <p
          style={{
            color: "#888",
          }}
        >
          User ID: {user.id}
        </p>
      </div>
    </main>
  );
}