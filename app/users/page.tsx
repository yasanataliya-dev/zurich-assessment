"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/store/store";
import { fetchUsers } from "@/store/usersActions";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function UsersPage() {
  const dispatch = useDispatch<AppDispatch>();

  const [visibleEmails, setVisibleEmails] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  // Number of users displayed on each UI page
  const USERS_PER_PAGE = 3;

  // Calculate total UI pages
  const totalPages = Math.max(
    1,
    Math.ceil(users.length / USERS_PER_PAGE)
  );

  // Calculate users for current page
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;

  const currentUsers = users.slice(
    startIndex,
    startIndex + USERS_PER_PAGE
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Previous page
  const handlePrevious = () => {
    setCurrentPage((current) => Math.max(current - 1, 1));
  };

  // Next page
  const handleNext = () => {
    setCurrentPage((current) =>
      Math.min(current + 1, totalPages)
    );
  };

  // Show / hide email
  const toggleEmail = (userId: number) => {
    setVisibleEmails((current) =>
      current.includes(userId)
        ? current.filter((id) => id !== userId)
        : [...current, userId]
    );
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f6f8",
        padding: "30px 50px",
      }}
    >
      {/* Reusable Header */}
      <Header title="Users" />

      {/* Loading */}
      {loading && (
        <p
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          Loading users...
        </p>
      )}

      {/* Error */}
      {error && (
        <p
          style={{
            textAlign: "center",
            color: "red",
          }}
        >
          {error}
        </p>
      )}

      {/* Users */}
      {!loading && !error && (
        <>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {currentUsers.map((user) => (
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
                    backgroundColor: "#ffffff",
                    borderRadius: "12px",
                    padding: "24px",
                    minHeight: "180px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    cursor: "pointer",
                  }}
                >
                  <Image
                    src={user.avatar}
                    alt={`${user.first_name} ${user.last_name}`}
                    width={70}
                    height={70}
                    style={{
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                  />

                  <h2
                    style={{
                      margin: "15px 0 6px",
                      fontSize: "19px",
                      fontWeight: 600,
                    }}
                  >
                    {user.first_name} {user.last_name}
                  </h2>

                  {/* Masked Email */}
                  <p
                    style={{
                      margin: "8px 0",
                      color: "#666",
                    }}
                  >
                    Email:{" "}
                    {visibleEmails.includes(user.id)
                      ? user.email
                      : "****************"}
                  </p>

                  {/* Show / Hide Email */}
                  <button
                    type="button"
                    onClick={(event) => {
                      event.preventDefault();
                      event.stopPropagation();

                      toggleEmail(user.id);
                    }}
                    style={{
                      marginTop: "8px",
                      padding: "8px 12px",
                      borderRadius: "6px",
                      border: "1px solid #ccc",
                      background: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    {visibleEmails.includes(user.id)
                      ? "Hide Email"
                      : "Show Email"}
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              marginTop: "35px",
            }}
          >
            {/* Previous */}
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1 || loading}
              style={{
                padding: "10px 18px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                backgroundColor:
                  currentPage === 1 ? "#eee" : "#fff",
                cursor:
                  currentPage === 1
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Previous
            </button>

            {/* Page Number */}
            <span
              style={{
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              Page {currentPage} of {totalPages}
            </span>

            {/* Next */}
            <button
              onClick={handleNext}
              disabled={
                currentPage === totalPages || loading
              }
              style={{
                padding: "10px 18px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                backgroundColor:
                  currentPage === totalPages
                    ? "#eee"
                    : "#fff",
                cursor:
                  currentPage === totalPages
                    ? "not-allowed"
                    : "pointer",
              }}
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* Reusable Footer */}
      <Footer />
    </main>
  );
}