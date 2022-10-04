import { useEffect, useState } from "react";
import { BoardCard } from "../componet/BoardCard";
import { useAsync } from "../hooks/useAsync";
import { getAllBoards } from "../services/post";

interface board {
  id: string;
  name: string;
  catagoryId: string;
  post: any;
}

export const Boards = () => {
  const { error, loading, value: boards } = useAsync(getAllBoards);

  console.log(boards);

  return (
    <>
      <div className="px-2">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <a>
                <h1 className="text-white text-4xl font-bold py-4">
                  Browse all
                </h1>
              </a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>Boards</li>
          </ul>
        </div>
        <div>
          {loading ? (
            <p className="text-white 5xl">loading</p>
          ) : (
            <div className="flex flex-wrap ">
              {boards?.map((board: board, index: number) => {
                return (
                  <BoardCard
                    boardId={board.id}
                    name={board.name}
                    posts={board.post.length}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
