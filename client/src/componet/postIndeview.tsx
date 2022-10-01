import { BsListNested } from "react-icons/bs";
import { BsImages, BsCardText } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";

export const PostINdexView = () => {
  return (
    <>
      <div className="flex bg-[#1B1B1B] hover:border border-gray-300 cursor-pointer ">
        <div className="flex text-white text-xl items-center p-3 space-x-3  border-l border-r  border-gray-500">
          <p>32</p>
          <BsListNested size={22} />
        </div>

        <div className="flex p-3 items-center space-x-3">
          <BsImages size={18} />
          <div>
            <p className="text-xl">Monthly Questions and Discussion Thread</p>
            <p className="text-[10px]">
              posted by <span className="text-primary">Annoynmus</span>
              at 16/12/2022
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
