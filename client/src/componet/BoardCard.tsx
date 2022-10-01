import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const backgrounds = [
  "#CF4321",
  "#9854B2",
  "#3371E4",
  "#7259FF",
  "#E9115A",
  "#26856B",
  "#016550",
  "#CF4321",
  "#9854B2",
  "#3371E4",
  "#7259FF",
  "#E9115A",
  "#26856B",
  "#016550",
];

interface Props {
  posts: number;
  name: string;
  boardId: string;
}

export const BoardCard = ({ name, posts, boardId }: Props) => {
  const [bg, setBg] = useState("");
  useEffect(() => {
    let numb = getRandomInt(0, 12);
    setBg(backgrounds[numb]);
    console.log(bg);
    console.log(numb);
  }, []);
  return (
    <Link to={`/${boardId}/posts`}>
      <div
        style={{
          backgroundColor: bg,
        }}
        className={`card w-64 h-64 shadow-xl  mx-4 my-5 cursor-pointer`}
      >
        <div className="card-body  flex relative ">
          <h2 className="card-title text-white text-xl">{name}</h2>
          <div className="card-actions justify-end  mt-16 absolute bottom-6 right-6">
            <button className="px-8 py-2 rounded-full bg-white text-black">
              {posts} posts
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
