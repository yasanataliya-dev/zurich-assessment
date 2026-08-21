"use server";

import { getUsers } from "@/lib/api";

export async function fetchUsersAction() {
  try {
    const users = await getUsers();

    return {
      success: true,
      users,
    };
  } catch {
    return {
      success: false,
      users: [],
      error: "Unable to fetch users",
    };
  }
}