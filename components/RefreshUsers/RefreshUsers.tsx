"use client";

import { useState } from "react";
import { fetchUsersAction } from "@/lib/actions";

export default function RefreshUsers() {
  const [loading, setLoading] = useState(false);

  async function handleRefresh() {
    setLoading(true);

    try {
      await fetchUsersAction();
      window.location.reload();
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleRefresh}
      disabled={loading}
      className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {loading ? "Refreshing..." : "Refresh Users"}
    </button>
  );
}