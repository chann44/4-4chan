import { comment } from "../context/PostContextProvider";
import { Comment } from "./comment";

interface props {
  comments: comment[];
}

export const CommentList = ({ comments }: props) => {
  return (
    <>
      <div className="comment-stack">
        {comments?.map((comment: comment) => {
          return (
            <Comment
              id={comment.id}
              likes={comment.likes}
              message={comment.message}
              parentId={comment.parentId}
            />
          );
        })}
      </div>
    </>
  );
};
