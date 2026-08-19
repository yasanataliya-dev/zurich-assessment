export async function getUsers(page: number = 1) {
    console.log("API KEY EXISTS:", !!process.env.REQRES_API_KEY);
  const response = await fetch(
    `https://reqres.in/api/users?page=${page}`,
    {
      headers: {
        "x-api-key": process.env.REQRES_API_KEY || "",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}