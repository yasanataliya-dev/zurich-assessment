"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main style={{ padding: "30px" }}>
      <h1>Something went wrong</h1>

      <button onClick={() => reset()}>
        Try again
      </button>
    </main>
  );
}