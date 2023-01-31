import MovieForm from "./movieFrom";
import prisma from "../lib/prisma";
import MoviePoster from "./components/posters";

async function fetchFromPrisma() {
  const data = await prisma.movie.findMany();
  return data;
}

export default async function Home() {
  const movies = await fetchFromPrisma();
  console.log(movies);
  return (
    <main className="w-full mt-12">
      <div className="flex flex-wrap justify-evenly items-center pt-5">
        {movies?.map((movie) => (
          <div className="basis-60 " key={movie.id}>
            <h1>{movie.title}</h1>
            <MoviePoster title={movie.title} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <MovieForm />
      </div>
    </main>
  );
}
