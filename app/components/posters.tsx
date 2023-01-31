"use client";
import { useEffect, useState } from "react";
import { Poster } from "types";

type PosterProps = {
  title: string;
};

export default function PosterImgs({ title }: PosterProps) {
  const [poster, setPoster] = useState<Poster>();

  useEffect(() => {
    async function fetchPosters() {
      const res = await fetch(
        `http://www.omdbapi.com/?t=${title}&apikey=${process.env.NEXT_PUBLIC_POSTER_API_KEY}`
      );
      const data: Poster = await res.json();
      setPoster(data);
    }
    fetchPosters().catch(console.error);
  }, [title]);
  if (!poster) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <img
        src={poster.Poster}
        alt={`poster of ${poster.Title}`}
        className="h-full object-fill border-2 border-teal-500 rounded-md"
      />
      <p>{poster.imdbRating}</p>
    </div>
  );
}
