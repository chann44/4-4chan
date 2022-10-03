import {
  Dispatch,
  ReactElement,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import {
  AiFillFileText,
  AiOutlineClose,
  AiOutlineFileImage,
  AiOutlineLink,
  AiOutlineSend,
} from "react-icons/ai";
import { BsImage } from "react-icons/bs";
import { useBoard } from "../context/boardContext";
import { api } from "../uttils/makeRequest";

interface Props {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  val: string;
}

interface TabProp {
  text: string;
  Icon: any;
  current: string;
}

const Tab = ({ text, Icon, current }: TabProp) => {
  return (
    <div
      className={`flex space-x-2 w-max px-5 py-3  border-b-2 ${
        current == text ? " border-b-green-500 " : " border-gray-400"
      }`}
    >
      <Icon />
      <p>{text}</p>
    </div>
  );
};

export const CreatePost = ({ modal, setModal, val }: Props) => {
  const [active, setActive] = useState(val);
  const [postValue, setPostValue] = useState("");
  const [linkTitle, setLinkTitle] = useState("");
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const { board, setPosts } = useBoard();

  const create = async () => {
    try {
      const res = await api("/createpost", {
        method: "POST",
        data: {
          body: postValue,
          image: null,
          linkTitle: linkTitle,
          url: link,
          title: title,
          boardId: board?.id,
        },
      });
      setPosts((prev: any) => {
        return [res.data, ...prev];
      });
      setPostValue("");
      setTitle("");
      setLink("");
      setLinkTitle("");
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className="justify-center  bg-[#262629]  flex overflow-x-hidden overflow-y-auto fixed top-0 left-0 right-0 z-50 outline-none focus:outline-none bg-opacity-50  h-screen">
        <div className="relative  w-auto my-6 mx-auto max-w-3xl ">
          <div className="border-0 rounded-lg  relative bg-[#262629] flex flex-col w-full bg-dark outline-none focus:outline-none shadow-2xl">
            <div className="flex items-center justify-between p-3  rounded-t ">
              <button
                className="text-3xl"
                onClick={() => {
                  setModal(false);
                }}
              >
                <AiOutlineClose />
              </button>
              <button
                className="text-3xl"
                onClick={() => {
                  create();
                  setModal(false);
                }}
              >
                <AiOutlineSend />
              </button>
            </div>
            <div className="relative p-3 flex-auto w-[600px] bg-dark">
              <div className=" flex border border-gray-500">
                <div
                  onClick={() => {
                    setActive("post");
                  }}
                >
                  <Tab text="post" current={active} Icon={AiFillFileText} />
                </div>
                <div
                  onClick={() => {
                    setActive("link");
                  }}
                >
                  <Tab text="link" current={active} Icon={AiOutlineLink} />
                </div>
                <div
                  onClick={() => {
                    setActive("image");
                  }}
                >
                  <Tab text="image" current={active} Icon={BsImage} />
                </div>
              </div>
              <div className="m-5">
                {active == "post" && (
                  <div className="flex flex-col space-y-4">
                    <input
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                      type="text"
                      placeholder="title"
                      className="p-3 bg-[#262629] border border-gray-500"
                    />

                    <textarea
                      className="bg-transparent border border-gray-600 w-full p-4"
                      name=""
                      id=""
                      cols={60}
                      rows={10}
                      value={postValue}
                      placeholder="what do you think ??"
                      onChange={(e) => {
                        setPostValue(e.target.value);
                      }}
                    ></textarea>
                  </div>
                )}
                {active == "link" && (
                  <div className="flex flex-col space-y-10">
                    <input
                      onChange={(e) => {
                        setLinkTitle(e.target.value);
                      }}
                      type="text"
                      placeholder="title"
                      className="p-3 bg-[#262629] border border-gray-500"
                    />
                    <input
                      onChange={(e) => {
                        setLink(e.target.value);
                      }}
                      type="text"
                      className="p-3 bg-[#262629] border border-gray-500"
                      placeholder="url"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
