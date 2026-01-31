// components/AccessibleForm.jsx
import { useState } from "react";

export default function AccessibleForm() {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("Email is required");
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <label htmlFor="email" className="block mb-1 font-medium">
        Email
      </label>

      <input
        id="email"
        type="email"
        aria-describedby="email-error"
        className="w-full border p-2 rounded focus:ring-2"
      />

      {error && (
        <p id="email-error" className="text-red-600 mt-1">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
