import { useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Navbar = () => {
  const [current, setCurrent] = useState("what is 4-4chan");

  return (
    <>
      <div className="navbar bg-[#1B1B1B]  ">
        <div className="w-[90%] lg:w-[70%] m-auto">
          <div className="flex-1">
            <Link to="/">
              <a className="font-bold text-3xl">4-4Chan</a>
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
              <Link to="/">
                <li>
                  <a
                    onClick={(e: any) => {
                      setCurrent("what is 4-4chan");
                    }}
                    className={`${
                      current === "what is 4-4chan"
                        ? "text-primary  bg-primary/20 "
                        : " "
                    }  px-10`}
                  >
                    what is 4-4chan
                  </a>
                </li>
              </Link>
              <Link to="/boards">
                <li>
                  <a
                    onClick={(e: any) => {
                      setCurrent("Browse");
                    }}
                    className={`${
                      current === "Browse" ? "text-primary bg-primary/20 " : " "
                    } px-14`}
                  >
                    Browse
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
