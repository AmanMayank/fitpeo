import React from "react";
import {
  FcComboChart,
  FcBriefcase,
  FcAbout,
  FcCurrencyExchange,
} from "react-icons/fc";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";

const FirstRow = () => {
  return (
    <div className="w-full mt-4 h-40  flex gap-4 justify-between">
      <div className="w-[65%]  left-0 h-full flex justify-between gap-2">
        <div className=" shadow-lg w-full rounded-xl px-4 py-2 flex justify-between flex-col bg-blue-200">
          <div className="mt-3">
            <FcComboChart size={40} />
            <h2 className="mt-3 text-base font-bold text-gray-600">
              Total orders
            </h2>
          </div>

          <div className="flex justify-between items-center font-medium mb-1">
            <p className="text-2xl">75</p>
            <p className="flex items-center text-green-600">
              <MdArrowDropUp size={25} />
              3%
            </p>
          </div>
        </div>

        <div className=" shadow-lg w-full rounded-xl px-4 py-2 flex justify-between flex-col bg-blue-200">
          <div className="mt-3">
            <FcBriefcase size={40} />
            <h2 className="mt-3 text-base font-bold text-gray-600">
              Total delivered
            </h2>
          </div>

          <div className="flex justify-between items-center font-medium mb-1">
            <p className="text-2xl">70</p>
            <p className="flex items-center text-red-600">
              <MdArrowDropDown size={25} />
              3%
            </p>
          </div>
        </div>

        <div className=" shadow-lg w-full rounded-xl px-4 py-2 flex justify-between flex-col bg-blue-200">
          <div className="mt-3">
            <FcAbout size={40} />
            <h2 className="mt-3 text-base font-bold text-gray-600">
              Total cancelled
            </h2>
          </div>

          <div className="flex justify-between items-center font-medium mb-1">
            <p className="text-2xl">05</p>
            <p className="flex items-center text-green-600">
              <MdArrowDropUp size={25} />
              3%
            </p>
          </div>
        </div>

        <div className=" shadow-lg w-full rounded-xl px-4 py-2 flex justify-between flex-col bg-blue-200">
          <div className="mt-3">
            <FcCurrencyExchange size={40} />
            <h2 className="mt-3 text-base font-bold text-gray-600">
              Total revenue
            </h2>
          </div>

          <div className="flex justify-between items-center font-medium mb-1">
            <p className="text-2xl">$12k</p>
            <p className="flex items-center text-green-600">
              <MdArrowDropUp size={25} />
              3%
            </p>
          </div>
        </div>
      </div>

      <div className="w-[35%] bg-blue-200 shadow-lg right-0  h-full rounded-xl flex justify-between items-center">
        <div className="h-full flex justify-between flex-col px-4 py-4 ">
          <div className="text-gray-900 font-semibold text-sm">Net Profit</div>

          <div className="text-4xl mt-3 font-bold">$6759.25</div>

          <div>
            <p className="flex items-center text-green-600">
              <MdArrowDropUp size={25} />
              3%
            </p>
          </div>
        </div>

        <div className="flex-col items-center justify-between pr-2">
          <div className="w-[125px] mx-auto border-[12px] border-l-blue-800 rounded-full mr-6 p-5 relative font-semibold flex justify-center items-center flex-col">
            <div className="text-3xl">25%</div>
            <div className="text-[10px] text-center">Goal Completed</div>
          </div>
          <div className="text-xs">*The values here has been rounded off.</div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
