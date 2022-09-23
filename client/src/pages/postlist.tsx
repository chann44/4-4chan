import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/post";

export interface Post {
  id: string;
  title: string;
}

export const PostList = () => {
  const { error, loading, value: posts } = useAsync(getPost);

  return (
    <>
      <div className="container">
        {posts?.map((post: Post) => {
          return (
            <Link key={post.id} to={`/${post.id}`}>
              <h1 key={post.id}>{post.title}</h1>
            </Link>
          );
        })}
      </div>
    </>
  );
};
