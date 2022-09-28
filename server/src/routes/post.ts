import { Router } from "express";
import {
  createCommetn,
  createPost,
  getAllPostByBoard,
  getPostbyID,
} from "src/controller.s/controller";

const router = Router();

router.post("/createpost", createPost);
router.post("/createcomment", createCommetn);
router.get("/:boardId", getAllPostByBoard);
router.get("/:id", getPostbyID);

export default router;
