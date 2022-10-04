import { comment, usePost } from "../context/PostContextProvider";
import { IconBtn } from "./IconButton";
import {
  FaHeart,
  FaReply,
  FaEdit,
  FaTrash,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import { useState } from "react";
import { CommentList } from "./commentlist";
import { AddComment } from "./addCommentinput";
import { useAsync, useAsyncFn } from "../hooks/useAsync";
import { createComment } from "../services/comment";
const dateFormatter = new Intl.DateTimeFormat(undefined, {
  dateStyle: "medium",
  timeStyle: "short",
});

export const Comment = ({ id, message, createdAt }: comment) => {
  const { getReplies, post, createLocalComment } = usePost();
  const [isReplying, setIsReplying] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const childComments: comment[] = getReplies(id);
  const [areChildrenHidden, setAreChildrenHidden] = useState(false);
  const { execute: addComment } = useAsyncFn(createComment);
  return (
    <>
      <div className=" rounded-sm my-5  border-gray-400 border p-4">
        <div className="header flex justify-between">
          <span className="name text-primary">annoynmus</span>
          <span>{new Date(createdAt.toString()).toLocaleDateString()}</span>
        </div>

        <div className="message">{message}</div>
        <div className="footer">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={(prev) => {
              setIsReplying(!isReplying);
            }}
          >
            <span className="text-primary underline">Reply</span>{" "}
            <IconBtn Icon={FaReply} aria-lable="reply" />
          </div>
        </div>
        <div>
          {isReplying && (
            <AddComment
              setIsReply={setIsReplying}
              intialValue=""
              parentId={id}
            />
          )}
        </div>
      </div>
      {childComments?.length > 0 && (
        <>
          <div
            className={`nested-comments-stack  ${
              areChildrenHidden ? "hide" : ""
            }`}
          >
            <button
              className="collapse-line"
              aria-label="hide"
              onClick={() => {
                setAreChildrenHidden(true);
              }}
            ></button>
            <div className="nested-comments">
              <CommentList comments={childComments} />
            </div>
          </div>

          {areChildrenHidden && (
            <button
              onClick={() => {
                setAreChildrenHidden(false);
              }}
            >
              <FaExpandArrowsAlt />
            </button>
          )}
        </>
      )}
    </>
  );
};
