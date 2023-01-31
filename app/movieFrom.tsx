"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export default function TheMovieForm() {
  const [title, setTitle] = useState<string | null>(); // I hate using null
  const [rating, setRating] = useState<number | null>(); // feels wrong
  async function createMovie() {
    const res = await fetch(`/api/addmovie/${title}/${rating}`);
    if (res.status === 200) {
      setTitle(null);
      setRating(null);
      redirect("/");
    }
  }

  return (
    <div>
      <form className="flex flex-col justify-center items-center w-52">
        <label>Title</label>
        <input
          type="text"
          placeholder="  Title"
          onChange={(e) => setTitle(e.target.value)}
          className="text-black"
        />
        <label>Rating</label>
        <input
          type="text"
          placeholder="  Rating"
          onChange={(e) => setRating(Number(e.target.value))}
          className="text-black"
        />
        <button
          className="p-1 mt-1 w-12 bg-indigo-500 rounded-md"
          onClick={createMovie}
        >
          Add
        </button>
      </form>
    </div>
  );
}
