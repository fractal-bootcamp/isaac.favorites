import express from "express";
import { PrismaClient } from "@prisma/client";
import { log } from "console";
import cors from "cors";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(cors());

// Get all users
// Right now we just have one user
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

const allMovies = await prisma.movie.findMany();
console.log(allMovies);
console.log("Hello");

app.get("/movielist", async (req, res) => {
  // THIS FUNCTION NEEDS SOME INPUT TO FILTER WITH
  console.log(req.body.searchTerm);
  res.json(allMovies);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
