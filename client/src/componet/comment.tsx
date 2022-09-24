import { comment, usePost } from "../context/PostContextProvider";
import { IconBtn } from "./IconButton";
import { FaHeart, FaReply, FaEdit, FaTrash } from "react-icons/fa";
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
  const { getReplies, post, createLocalComment, isReplying, setIsReplying } =
    usePost();
  const [commentValue, setCommentValue] = useState("");
  const childComments: comment[] = getReplies(id);
  const [areChildrenHidden, setAreChildrenHidden] = useState(false);
  const { execute: addComment } = useAsyncFn(createComment);
  return (
    <>
      <div className="comment">
        <div className="header">
          <span className="name">annoynmus</span>
        </div>

        <div className="message">{message}</div>
        <div className="footer">
          <IconBtn Icon={FaHeart} aria-lable="like">
            2
          </IconBtn>
          <div
            onClick={(prev) => {
              setIsReplying(!isReplying);
            }}
          >
            <IconBtn Icon={FaReply} aria-lable="reply" />
          </div>
          <IconBtn Icon={FaEdit} aria-lable="edit" />
          <IconBtn Icon={FaTrash} color="danger" aria-lable="trash" />
        </div>
        <div>{isReplying && <AddComment intialValue="" parentId={id} />}</div>
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
              className="btn"
              onClick={() => {
                setAreChildrenHidden(false);
              }}
            >
              show Replies
            </button>
          )}
        </>
      )}
    </>
  );
};
