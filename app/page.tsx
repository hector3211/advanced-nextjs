import MovieForm from "./movieFrom";
import prisma from "../lib/prisma";
async function fetchFromPrisma() {
  const data = await prisma.movie.findMany();
  return data;
}

export default async function Home() {
  const movies = await fetchFromPrisma();
  return (
    <main className="w-full mt-10">
      <div>hello</div>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.rating}</p>
        </div>
      ))}
      <div className="flex justify-center items-center">
        <MovieForm />
      </div>
    </main>
  );
}
