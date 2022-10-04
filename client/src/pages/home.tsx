import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className=" flex min-h-screen justify-between items-center">
        <div className="flex flex-col justify-center min-h-[80vh] w-[50%] ">
          <h1 className="text-5xl font-bold text-white">
            Speak Out Loud but annoymusly
          </h1>
          <p className="mb-20 mt-12">
            4chan is a simple image-based bulletin board where anyone can post
            comments and share images. There are boards dedicated to a variety
            of topics, from Japanese animation and culture to videogames, music,
            and photography. Users do not need to register an account before
            participating in the community. Feel free to click on a board below
            that interests you and jump right in!
          </p>
          <Link to="/boards">
            <a className="text-white bg-primary/20 px-14 py-5 rounded-full mt-32 ">
              Get started
            </a>
          </Link>
        </div>
        <div>
          <img src="/speaker.png" className="w-96 h-96" alt="" />
        </div>
      </div>
    </>
  );
};
