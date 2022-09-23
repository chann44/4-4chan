import { usePost } from "../context/PostContextProvider";
import { CommentList } from "./commentlist";

export const PostDetails = () => {
  const { post, rootComments } = usePost();
  return (
    <>
      <div className="container">
        <h1>{post?.title}</h1>
        <p>{post.body}</p>
        <h2>comments</h2>
        {rootComments !== null && rootComments.length > 0 && (
          <div>
            <CommentList comments={rootComments} />
          </div>
        )}
      </div>
    </>
  );
};
