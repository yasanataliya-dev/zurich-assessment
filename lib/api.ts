import type { User } from "@/types/user";

type UsersResponse = {
  data: User[];
};

export async function getUsers(): Promise<User[]> {
  const response = await fetch("https://reqres.in/api/users", {
    headers: {
      "x-api-key": process.env.REQRES_API_KEY || "",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const data: UsersResponse = await response.json();

  return data.data;
}

export async function getUserById(id: string): Promise<User> {
  const response = await fetch(`https://reqres.in/api/users/${id}`, {
    headers: {
      "x-api-key": process.env.REQRES_API_KEY || "",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  const result = await response.json();

  return result.data;
}