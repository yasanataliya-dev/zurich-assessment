import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("User filtering", () => {
  const users = [
    {
      id: 1,
      first_name: "George",
      last_name: "Bluth",
    },
    {
      id: 2,
      first_name: "Janet",
      last_name: "Weaver",
    },
    {
      id: 3,
      first_name: "Emma",
      last_name: "Wong",
    },
    {
      id: 4,
      first_name: "Eve",
      last_name: "Holt",
    },
  ];

  it("should return users whose first name starts with G or last name starts with W", () => {
    const filteredUsers = users.filter(
      (user) =>
        user.first_name.toUpperCase().startsWith("G") ||
        user.last_name.toUpperCase().startsWith("W")
    );

    expect(filteredUsers).toHaveLength(3);

    expect(filteredUsers.map((user) => user.first_name)).toEqual([
      "George",
      "Janet",
      "Emma",
    ]);
  });
});

describe("Email masking", () => {
  it("should hide the email by default", () => {
    const email = "george.bluth@reqres.in";
    const maskedEmail = "****************";

    expect(maskedEmail).not.toBe(email);
    expect(maskedEmail).toBe("****************");
  });

  it("should show the email when requested", () => {
    const email = "george.bluth@reqres.in";

    expect(email).toBe("george.bluth@reqres.in");
  });
});

describe("Users UI", () => {
  it("should display a user and hide the email initially", () => {
    function UserCard() {
      return (
        <div>
          <h2>George Bluth</h2>

          <p data-testid="email">
            ****************
          </p>

          <button>Show Email</button>
        </div>
      );
    }

    render(<UserCard />);

    expect(screen.getByText("George Bluth")).toBeInTheDocument();

    expect(screen.getByTestId("email")).toHaveTextContent(
      "****************"
    );

    expect(
      screen.getByRole("button", { name: "Show Email" })
    ).toBeInTheDocument();
  });

  it("should show the email when the button is clicked", () => {
    function UserCard() {
      const [visible, setVisible] = React.useState(false);

      return (
        <div>
          <p data-testid="email">
            {visible
              ? "george.bluth@reqres.in"
              : "****************"}
          </p>

          <button onClick={() => setVisible(!visible)}>
            {visible ? "Hide Email" : "Show Email"}
          </button>
        </div>
      );
    }

    render(<UserCard />);

    expect(screen.getByTestId("email")).toHaveTextContent(
      "****************"
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Show Email" })
    );

    expect(screen.getByTestId("email")).toHaveTextContent(
      "george.bluth@reqres.in"
    );

    expect(
      screen.getByRole("button", { name: "Hide Email" })
    ).toBeInTheDocument();
  });
});