import { useAsync } from "../hooks/useAsync";
import { getPost } from "../services/post";
import { backgrounds, getRandomInt } from "../componet/BoardCard";
import { useEffect, useState } from "react";
import { BsImages } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { PostINdexView } from "../componet/postIndeview";
import { CreatePost } from "../componet/CreatePost";
import { Post, useBoard } from "../context/boardContext";
import { Link } from "react-router-dom";

export const PostList = () => {
  const [bg, setBg] = useState("");
  const [modal, setModal] = useState(false);
  const [val, setVal] = useState("");

  const { board, posts } = useBoard();
  useEffect(() => {
    setBg(backgrounds[getRandomInt(0, 12)]);
  }, []);

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
                <h1 className="text-4xl px-7 font-extrabold text-white">
                  {board?.title}
                </h1>
              </a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>browse</li>
          </ul>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="flex items-center my-12 space-x-4 bg-[#1B1B1B] p-3 rounded">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <input
            onClick={() => {
              setVal("post");
              setModal(true);
            }}
            className="grow p-3 bg-[#262629]"
            placeholder="create a post"
            type="text"
            name=""
            id=""
          />
          <div className="flex ">
            <div className="hover:bg-[#262629] p-2 mx-2 cursor-pointer ">
              <BsImages
                size={18}
                className=" "
                onClick={() => {
                  setVal("image");
                  setModal(true);
                }}
              />
            </div>
            <div className="hover:bg-[#262629] p-2 mx-2 cursor-pointer">
              <AiOutlineLink
                size={19}
                onClick={() => {
                  setVal("link");
                  setModal(true);
                }}
              />
            </div>
          </div>
        </div>
        <div>
          {posts?.map((post: Post) => {
            return (
              <Link to={`/${post.id}`}>
                <PostINdexView
                  url={post.linkTitle}
                  image={post.image}
                  id={post.id}
                  title={post.title}
                  createdAt={post.createdAt}
                  commentCount={post.comment.length}
                />
              </Link>
            );
          })}
        </div>
        {modal ? (
          <CreatePost val={val} modal={modal} setModal={setModal} />
        ) : null}
      </div>
    </>
  );
};
