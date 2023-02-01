import { Poster } from "types";
import DeleteButton from "./deleteButton";

type PosterProps = {
  id: number;
  title: string;
};

async function fetchPoster(title: string) {
  const res = await fetch(
    `http://www.omdbapi.com/?t=${title}&apikey=${process.env.NEXT_PUBLIC_POSTER_API_KEY}`
  );
  const data: Poster = await res.json();
  return data;
}

export default async function PosterImgs({ id, title }: PosterProps) {
  const poster = await fetchPoster(title);
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
      <div className="flex justify-between pt-2">
        <p>⭐{poster.imdbRating}</p>
        <DeleteButton id={id} />
        <button className="btn btn-sm btn-accent">❤</button>
      </div>
    </div>
  );
}
