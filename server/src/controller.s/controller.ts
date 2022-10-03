// get all posts for a board
import { Request, Response } from "express";
import { prisma } from "../prisma";
export const getAllPostByBoard = async (req: Request, res: Response) => {
  console.log(req.params.boardId);
  const board = await prisma.board.findUnique({
    where: {
      id: req.params.boardId,
    },
    select: {
      id: true,
      name: true,
      post: {
        select: {
          id: true,
          createdAt: true,
          title: true,
          image: true,
          linkTitle: true,
          comment: {
            select: {
              _count: true,
            },
          },
        },
      },
    },
  });
  res.status(200);
  res.json(board);
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
      createdAt: true,
      linkTitle: true,
      url: true,
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
      image: req.body.image,
      linkTitle: req.body.linkTitle,
      url: req.body.url,
      title: req.body.title,
      boardId: req.body.boardId,
    },
    select: {
      id: true,
      createdAt: true,
      title: true,
      image: true,
      linkTitle: true,
      board: {
        select: {
          id: true,
          name: true,
        },
      },
      comment: {
        select: {
          _count: true,
        },
      },
    },
  });

  res.status(200);
  res.json(post);
};

// create a comment
export const createCommetn = async (req: Request, res: Response) => {
  const parentId = req.body.parentId;
  console.log(parentId);
  const message = req.body.message;
  const postId = req.body.postId;

  const commentData = parentId
    ? {
        parentId: parentId,
        message: message,
        postId: postId,
      }
    : {
        message: message,
        postId: postId,
      };

  const comment = await prisma.comment.create({
    data: commentData,
  });
  res.status(200);
  res.json(comment);
};

export const getAllBoards = async (_req: Request, res: Response) => {
  const boards = await prisma.board.findMany();
  res.status(200);
  res.json(boards);
};
