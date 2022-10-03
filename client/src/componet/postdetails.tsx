import { BsListNested } from "react-icons/bs";
import { usePost } from "../context/PostContextProvider";
import { AddComment } from "./addCommentinput";
import { CommentList } from "./commentlist";

export const PostDetails = () => {
  const { post, rootComments, comments } = usePost();
  console.log(post);

  return (
    <>
      <div className="lg:w-[60%] w-full min-h-screen my-10 bg-[#1B1B1B] p-4 mx-auto">
        <div className="flex items-start space-x-4">
          <div className="flex text-white text-xl items-center p-3 space-x-3  border-l border-r  border-gray-500">
            <p>{comments?.length}</p>
            <BsListNested size={22} />
          </div>
          <div>
            <p className="text-sm text-gray-600">
              posted by <span className="text-primary">Annoynmus</span> at
              12/12/2022
            </p>
            <h1 className="text-4xl text-white p-4">{post?.title}</h1>
            <p className="p-5">{post?.body}</p>
            {post?.url && (
              <a className="link link-accent" href={post?.url}>
                {post.linkTitle}
              </a>
            )}
            <div className="divider"></div>
            <AddComment parentId={""} intialValue="" />
            {rootComments !== null && rootComments?.length > 0 && (
              <div>
                <CommentList comments={rootComments} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
