import React, { useState } from "react";

export default function SearchBar({ setQuery }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) setQuery(input);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 w-full max-w-md flex shadow-lg rounded-lg overflow-hidden"
    >
      <input
        type="text"
        placeholder="Pl. pastel aesthetic, cozy cafe..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-3 outline-none text-gray-800 placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-pink-500 text-white px-6 py-3 hover:bg-pink-600 transition"
      >
        Keresés
      </button>
    </form>
  );
}
