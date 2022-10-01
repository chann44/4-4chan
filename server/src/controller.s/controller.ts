// get all posts for a board
import { Request, Response } from "express";
import { prisma } from "../prisma";
export const getAllPostByBoard = async (req: Request, res: Response) => {
  console.log(req.params.boardId);
  const post = await prisma.post.findMany({
    where: {
      boardId: req.params.boardId,
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
  res.status(200);
  res.json(post);
};

// get a post by id
export const getPostbyID = async (req: Request, res: Response) => {
  console.log(req.params);
  const post = await prisma.post.findUnique({
    where: {
      id: req.params.id,
    },
    select: {
      body: true,
      id: true,
      title: true,
      board: true,
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
  res.status(200);
  res.json(post);
};

// create a post on a board
export const createPost = async (req: Request, res: Response) => {
  const post = await prisma.post.create({
    data: {
      body: req.body.body,
      title: req.body.title,
      boardId: req.body.boardId,
    },
  });

  res.status(200);
  res.json(post);
};

// create a comment
export const createCommetn = async (req: Request, res: Response) => {
  const comment = await prisma.comment.create({
    data: {
      message: req.body.message,
      parentId: req.body.parentId,
      postId: req.body.postId,
    },
  });
  res.status(200);
  res.json(comment);
};

export const getAllBoards = async (_req: Request, res: Response) => {
  const boards = await prisma.board.findMany();
  res.status(200);
  res.json(boards);
};
