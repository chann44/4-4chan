import { useState } from "react";
import { usePost } from "../context/PostContextProvider";
import { useAsync, useAsyncFn } from "../hooks/useAsync";
import { createComment } from "../services/comment";

interface Props {
  intialValue: string;
  parentId: string;
  setIsReply: any;
}

export const AddComment = ({
  intialValue = "",
  parentId,
  setIsReply,
}: Props) => {
  const [commentValue, setCommentValue] = useState(intialValue);
  const { post, createLocalComment } = usePost();
  const { loading, error, execute: addComment } = useAsyncFn(createComment);
  const handleSubmit = async () => {
    console.log(commentValue);
    const comment = await addComment(commentValue, parentId, post.id);
    console.log("parentid", parentId);
    await createLocalComment(comment);
    setCommentValue("");
    setIsReply(false);
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
          <div className="flex flex-col">
            <p className="mb-5">
              Comment as <span className="text-primary">Annoynmus</span>
            </p>
            <textarea
              className="bg-transparent border border-gray-600 w-full p-4"
              name=""
              id=""
              cols={60}
              rows={10}
              value={commentValue}
              placeholder="what do you think ??"
              onChange={(e) => {
                setCommentValue(e.target.value);
              }}
            ></textarea>
            <div className="flex w-full justify-end">
              <button
                type="submit"
                className=" w-max bg-primary/70 hover:bg-primary text-black px-6 my-3 py-2 rounded-full "
              >
                comment
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
