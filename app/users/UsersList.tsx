"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";
import { setUsers } from "@/store/userSlice";

type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type UsersListProps = {
  users: User[];
};

export default function UsersList({ users }: UsersListProps) {
  const dispatch = useDispatch<AppDispatch>();

  const reduxUsers = useSelector(
    (state: RootState) => state.users.users
  );

  useEffect(() => {
    dispatch(setUsers(users));
  }, [dispatch, users]);

  const displayedUsers =
    reduxUsers.length > 0 ? reduxUsers : users;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {displayedUsers.map((user) => (
        <Link
          key={user.id}
          href={`/users/${user.id}`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
            }}
          >
            <Image
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              width={100}
              height={100}
            />

            <h2>
              {user.first_name} {user.last_name}
            </h2>

            <p>{user.email}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}