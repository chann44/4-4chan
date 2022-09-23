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

app.get("/:id", async (req: Request, res: Response) => {
  const post = await prisma.post.findUnique({
    where: {
      id: req.params.id,
    },
    select: {
      body: true,
      id: true,
      title: true,
      comment: {
        orderBy: {
          createdAt: "desc",
        },
        select: {
          id: true,
          likes: true,
          message: true,
          postId: true,
          parentId: true,
          user: {
            select: {
              username: true,
              id: true,
            },
          },
        },
      },
    },
  });
  console.log(post);
  res.json(200);
  res.json(post);
});

export default app;
