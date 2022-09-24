import { useState } from "react";
import { usePost } from "../context/PostContextProvider";
import { useAsync, useAsyncFn } from "../hooks/useAsync";
import { createComment } from "../services/comment";

interface Props {
  intialValue: string;
  parentId: string;
}

export const AddComment = ({ intialValue = "", parentId }: Props) => {
  const [commentValue, setCommentValue] = useState(intialValue);
  const { post, createLocalComment, setIsReplying } = usePost();
  const { loading, error, execute: addComment } = useAsyncFn(createComment);
  const handleSubmit = async () => {
    console.log(commentValue);
    const comment = await addComment(commentValue, parentId, post.id);
    console.log("parentid", parentId);
    await createLocalComment(comment);
    setCommentValue("");
    setIsReplying(false);
  };

  return (
    <>
      <div>
        <form
          style={{
            display: "flex",
          }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <textarea
            name=""
            id=""
            cols={40}
            rows={2}
            value={commentValue}
            onChange={(e) => {
              setCommentValue(e.target.value);
            }}
          ></textarea>
          <button type="submit" className="btn">
            comment
          </button>
        </form>
      </div>
    </>
  );
};
