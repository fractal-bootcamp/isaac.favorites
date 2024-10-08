import movies from "./movies";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  const myMovies = movies.movies;
  await prisma.movie.createMany({
    data: myMovies,
  });
};

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
