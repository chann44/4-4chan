import { BsImage, BsLine, BsLink, BsListNested } from "react-icons/bs";
import { BsImages, BsCardText } from "react-icons/bs";
import { AiFillFileText, AiOutlineLink } from "react-icons/ai";

interface PostIndexProps {
  id: string;
  title: string;
  createdAt: string;
  commentCount: number;
  url: string;
  image: string;
}

export const PostINdexView = ({
  id,
  commentCount,
  createdAt,
  title,
  url,
  image,
}: PostIndexProps) => {
  return (
    <>
      <div className="flex bg-[#1B1B1B] hover:border border-gray-300 cursor-pointer ">
        <div className="flex text-white text-xl items-center p-3 space-x-3  border-l border-r  border-gray-500">
          <p>{commentCount}</p>
          <BsListNested size={22} />
        </div>

        <div className="flex p-3 items-center space-x-3">
          {url ? (
            <BsLink size={18} />
          ) : image ? (
            <BsImage size={18} />
          ) : (
            <AiFillFileText size={18} />
          )}

          <div>
            <p className="text-xl">{title}</p>
            <p className="text-[10px]">
              posted by <span className="text-primary">Annoynmus</span>
              at {new Date(createdAt.toString()).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
