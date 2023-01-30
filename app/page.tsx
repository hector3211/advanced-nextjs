import prisma from "../lib/prisma";
async function fetchFromPrisma() {
  const data = await prisma.movie.findMany();
  return data;
}

export default async function Home() {
  const movies = await fetchFromPrisma();
  return (
    <main className="w-full">
      <div>hello</div>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <p>{movie.rating}</p>
        </div>
      ))}
    </main>
  );
}
