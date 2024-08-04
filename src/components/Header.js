import React from "react";
import { IoSearch } from "react-icons/io5";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <div className="ml-20 h-16 bg-gray-100 shadow-xl border flex justify-between items-center ">
      <div className="ml-4 border-2 flex items-center px-2 py-2 min-w-[220px] border-[#1a36c4]-4 bg-gray-50 text-xs text-gray-500">
        <IoSearch size={18} />
        <p className="ml-3">Search</p>
      </div>
      <div className="flex justify-between items-center mr-4 w-[200px]">
        <div className="rounded-full bg-gray-300 text-[#1a36c4] border-2-black w-7 h-7 flex items-center justify-center hover:scale-125 hover:shadow-xl cursor-pointer hover:bg-gray-500 hover:text-white">
          <HiOutlineEnvelope size={18} />
        </div>
        <div className="rounded-full bg-gray-300 text-[#1a36c4] border-2-black w-7 h-7 flex items-center justify-center hover:scale-125 hover:shadow-xl cursor-pointer hover:bg-gray-500 hover:text-white">
          <IoSettingsOutline size={18} />
        </div>
        <div className="rounded-full bg-gray-300 text-[#1a36c4] border-2-black w-7 h-7 flex items-center justify-center hover:scale-125 hover:shadow-xl cursor-pointer hover:bg-gray-500 hover:text-white">
          <IoIosNotificationsOutline size={18} />
        </div>
        <div className="rounded-full bg-gray-300 text-[#1a36c4] border-2-black w-7 h-7 flex items-center justify-center hover:scale-125 hover:shadow-xl cursor-pointer hover:bg-gray-500 hover:text-white">
          <AiOutlineUser size={18} />
        </div>
      </div>
    </div>
  );
};

export default Header;
