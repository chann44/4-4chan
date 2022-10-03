import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPostById } from "../services/post";
import { api } from "../uttils/makeRequest";

interface Props {
  children: ReactNode;
}

interface BoardContext {
  posts: Post[] | null;
  setPosts: Dispatch<SetStateAction<Post[] | null>>;
  board: Board | null;
  setBoard: Dispatch<SetStateAction<Board | null>>;
  fetchAllPost: Function;
}

export interface Post {
  id: string;
  image: string;
  linkTitle: string;
  title: string;
  createdAt: string;
  comment: any;
}

interface Board {
  title: string;
  id: string;
}

const context = createContext({} as BoardContext);

export const useBoard = () => {
  return useContext(context);
};

export const BoardContextProvider = ({ children }: Props) => {
  const { boardId } = useParams();

  console.log("here", boardId);

  const [board, setBoard] = useState<Board | null>(null);

  const [posts, setPosts] = useState<Post[] | null>([]);

  const fetchAllPost = async () => {
    const res = await api(`/board/${boardId}`);

    setBoard({ id: res.data.id, title: res.data.name });

    setPosts((prev: any) => {
      const data = res.data.post.map((post: any) => {
        return {
          id: post.id,
          title: post.title,
          comment: post.comment,
          image: post.image,
          linkTitle: post.linkTitle,
          createdAt: post.createdAt,
        };
      });
      return [...prev, ...data];
    });
  };

  useEffect(() => {
    if (boardId == null) return;
    fetchAllPost();
  }, []);

  useEffect(() => {
    posts?.map((post: Post) => {
      console.log(post.title);
    });
  }, [posts]);

  const createLocalComment = (comment: Post) => {
    setPosts((prev: any) => {
      return [posts, ...prev];
    });
  };

  return (
    <>
      <context.Provider
        value={{
          posts,
          setPosts,
          board,
          fetchAllPost,
          setBoard,
        }}
      >
        {children}
      </context.Provider>
    </>
  );
};
