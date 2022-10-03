import { useState } from "react";

export const Navbar = () => {
  const [current, setCurrent] = useState("");

  return (
    <>
      <div className="navbar bg-[#1B1B1B]  ">
        <div className="w-[90%] lg:w-[70%] m-auto">
          <div className="flex-1">
            <a className="font-bold text-3xl">4-4Chan</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal p-0">
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
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
