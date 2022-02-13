import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

function HistoryItem() {
  return (
    <div className="flex bg-white px-3 py-4 justify-between items-center  shadow-md mt-3 rounded-md">
      <div className="font-semibold">Grocery List</div>
      <div className="grid grid-cols-[1fr_1fr_30px] gap-5 items-center">
        <div className="flex items-center text-gray-400">
          <MdOutlineDateRange fontSize={20} />
          <span className="ml-2 text-sm">Mon 24.8.2020</span>
        </div>
        <div className="py-1 px-3 border-2 border-blue-300 text-blue-300 rounded-full text-center text-sm">
          completed
        </div>
        <div className="">
          <button className="text-yellow-500 text-xl">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HistoryItem;
