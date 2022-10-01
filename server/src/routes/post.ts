import { Router } from "express";
import {
  createCommetn,
  createPost,
  getAllBoards,
  getAllPostByBoard,
  getPostbyID,
} from "../controller.s/controller";

const router = Router();

router.post("/createpost", createPost);
router.post("/createcomment", createCommetn);
router.get("/board/:boardId", getAllPostByBoard);
router.get("/post/:id", getPostbyID);
router.get("/boards", getAllBoards);

export default router;
