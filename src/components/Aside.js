import React from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import {
  IoHomeOutline,
  IoBarChartOutline,
  IoClipboardOutline,
  IoWalletOutline,
  IoBagCheckOutline,
} from "react-icons/io5";

import { BsArrowRightCircle } from "react-icons/bs";

const Aside = () => {
  return (
    <div className="h-full bg-[#1a36c4]  min-w-20 flex flex-col justify-between fixed z-20 shadow-xl">
      <div className="text-white p-2 flex justify-center">
        <AiFillAlipayCircle size="70" />
      </div>

      <div className="flex justify-between flex-col  h-full border ">
        <div className="flex-col justify-between  mt-6 ">
          <div className="flex justify-center text-white p-2 mb-2 hover:shadow-lg cursor-pointer hover:bg-white hover:text-[#1a36c4]">
            <IoHomeOutline size={20} />
          </div>
          <div className="flex justify-center text-white p-2 mb-2 hover:shadow-lg cursor-pointer  hover:bg-white hover:text-[#1a36c4]">
            <IoBarChartOutline size={20} />
          </div>
          <div className="flex justify-center text-white p-2 mb-2 hover:shadow-lg cursor-pointer  hover:bg-white hover:text-[#1a36c4]">
            <IoClipboardOutline size={20} />
          </div>
          <div className="flex justify-center text-white p-2 mb-2 hover:shadow-lg cursor-pointer  hover:bg-white hover:text-[#1a36c4]">
            <IoWalletOutline size={20} />
          </div>
          <div className="flex justify-center text-white p-2 mb-2 hover:shadow-lg cursor-pointer  hover:bg-white hover:text-[#1a36c4]">
            <IoBagCheckOutline size={20} />
          </div>
        </div>

        <div className="mb-8  flex justify-center text-white p-2  hover:shadow-lg cursor-pointer  hover:bg-white hover:text-[#1a36c4]">
          <BsArrowRightCircle size={20} />
        </div>
      </div>
    </div>
  );
};

export default Aside;
