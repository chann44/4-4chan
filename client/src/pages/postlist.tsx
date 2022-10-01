import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/post";
import { backgrounds, getRandomInt } from "../componet/BoardCard";
import { useEffect, useState } from "react";
import { BsImages } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { PostINdexView } from "../componet/postIndeview";

export interface Post {
  id: string;
  title: string;
}

export const PostList = () => {
  const [bg, setBg] = useState("");

  useEffect(() => {
    setBg(backgrounds[getRandomInt(0, 12)]);
  }, []);
  const { error, loading, value: posts } = useAsync(getPost);

  return (
    <>
      <div
        style={{
          backgroundColor: bg,
        }}
        className="h-56 flex items-end py-10"
      >
        <div className="text-sm breadcrumbs">
          <ul className="flex items-center">
            <li>
              <a>
                <h1 className="text-7xl px-7 font-extrabold text-white">
                  Posts
                </h1>
              </a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>Post</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="flex items-center my-12 space-x-4 bg-[#1B1B1B] p-3 rounded">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <input
            className="grow p-3 bg-[#262629]"
            placeholder="create a post"
            type="text"
            name=""
            id=""
          />
          <div className="flex ">
            <div className="hover:bg-[#262629] p-2 mx-2 cursor-pointer ">
              <BsImages size={18} className=" " />
            </div>
            <div className="hover:bg-[#262629] p-2 mx-2 cursor-pointer">
              <AiOutlineLink size={19} />
            </div>
          </div>
        </div>
        <div>
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
          <PostINdexView />
        </div>
      </div>
    </>
  );
};
