import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { prisma } from "./prisma";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

app.get("/", async (_req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      title: true,
    },
  });
  res.json(posts);
});

export default app;
