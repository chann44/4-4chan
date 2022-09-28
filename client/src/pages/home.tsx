import { Boards } from "../componet/home./boards";

export const Home = () => {
  return (
    <>
      <div className="miin-h-screen w-full py-12">
        <div className="w-[90%] lg:w-[40%] m-auto">
          <h1 className="font-bold text-5xl   text-center">4-4chan</h1>
          <div className="border border-purple-500 my-11 ">
            <h2 className="bg-primary p-2">what is 4chan</h2>

            <p className=" p-5">
              4chan is a simple image-based bulletin board where anyone can post
              comments and share images. There are boards dedicated to a variety
              of topics, from Japanese animation and culture to videogames,
              music, and photography. Users do not need to register an account
              before participating in the community. Feel free to click on a
              board below that interests you and jump right in!
            </p>
          </div>

          <Boards />
        </div>
      </div>
    </>
  );
};
