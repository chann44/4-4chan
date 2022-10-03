import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPostById } from "../services/post";

interface Props {
  children: ReactNode;
}

export interface user {
  id: string;
  name: string;
}

export interface comment {
  id: string;
  parentId: string;
  message: string;
  likes: number;
  user: user;
  createdAt: string;
}

const context = createContext({} as any);

export const usePost = () => {
  return useContext(context);
};

export const PostContextProvider = ({ children }: Props) => {
  const { id } = useParams();
  const { error, loading, value: post } = useAsync(() => getPostById(id), [id]);
  const [comments, setComments] = useState<comment[] | null>(null);
  const [isReplying, setIsReplying] = useState(false);
  const commentByParentID = useMemo(() => {
    if (post?.comment == null) return [];
    const group: any = {};
    comments?.forEach((comment: comment) => {
      group[comment.parentId] ||= [];
      group[comment.parentId].push(comment);
    });

    console.log(post.comment);

    return group;
  }, [comments]);

  useEffect(() => {
    if (post?.comment == null) return;
    setComments(post?.comment);
  }, [post?.comment]);

  const getReplies = (parentId: string) => {
    return commentByParentID[parentId];
  };

  const createLocalComment = (comment: comment) => {
    setComments((prev: any) => {
      return [comment, ...prev];
    });
  };

  console.log(post);
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
          createLocalComment,
          isReplying,
          setIsReplying,
          comments,
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};
