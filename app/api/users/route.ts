import { NextResponse } from "next/server";

export async function GET() {
  try {
    const apiKey = process.env.REQRES_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "ReqRes API key is not configured" },
        { status: 500 }
      );
    }

    const firstResponse = await fetch(
      "https://reqres.in/api/users?page=1",
      {
        headers: {
          "x-api-key": apiKey,
        },
        cache: "no-store",
      }
    );

    if (!firstResponse.ok) {
      return NextResponse.json(
        { error: "Failed to fetch users" },
        { status: firstResponse.status }
      );
    }

    const firstPage = await firstResponse.json();

    const allUsers = [...firstPage.data];

    for (let page = 2; page <= firstPage.total_pages; page++) {
      const response = await fetch(
        `https://reqres.in/api/users?page=${page}`,
        {
          headers: {
            "x-api-key": apiKey,
          },
          cache: "no-store",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch page ${page}`);
      }

      const data = await response.json();

      allUsers.push(...data.data);
    }

    const filteredUsers = allUsers.filter(
      (user) =>
        user.first_name.toUpperCase().startsWith("G") ||
        user.last_name.toUpperCase().startsWith("W")
    );

    return NextResponse.json({
      data: filteredUsers,
      total: filteredUsers.length,
    });
  } catch (error) {
    console.error("Users API error:", error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}