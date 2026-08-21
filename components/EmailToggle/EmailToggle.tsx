"use client";

import { useState } from "react";

type EmailToggleProps = {
  email: string;
};

export default function EmailToggle({ email }: EmailToggleProps) {
  const [showEmail, setShowEmail] = useState(false);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setShowEmail((previous) => !previous);
  };

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={handleToggle}
        className="text-sm font-medium text-blue-600 hover:text-blue-800"
      >
        {showEmail ? "Hide Email" : "Show Email"}
      </button>

      {showEmail && (
        <p className="mt-2 text-sm text-gray-600">
          {email}
        </p>
      )}
    </div>
  );
}