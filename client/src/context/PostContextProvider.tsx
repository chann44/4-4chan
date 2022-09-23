import { createContext, ReactNode, useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPostById } from "../services/post";

interface Props {
  children: ReactNode;
}

export interface comment {
  id: string;
  parentId: string;
  message: string;
  likes: number;
}

const context = createContext({} as any);

export const usePost = () => {
  return useContext(context);
};

export const PostContextProvider = ({ children }: Props) => {
  const { id } = useParams();
  const { error, loading, value: post } = useAsync(() => getPostById(id), [id]);
  const commentByParentID = useMemo(() => {
    if (post?.comment == null) return [];
    const group: any = {};
    post?.comment.forEach((comment: comment) => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    });

    return group;
  }, [post?.comments]);

  const getReplies = (parentId: string) => {
    return commentByParentID[parentId];
  };

  console.log(commentByParentID["null"]);
  return (
    <>
      <context.Provider
        value={{
          post: {
            id,
            ...post,
          },
          getReplies,
          rootComments: commentByParentID["null"],
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};
