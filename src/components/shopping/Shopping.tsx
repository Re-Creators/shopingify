import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";

function Shopping() {
  return (
    <li className="flex items-center relative mt-3">
      <div className="font-semibold line-clamp-2 w-[220px]">Acocado Lorem,</div>
      <div className="absolute right-0 hover:bg-white flex items-center rounded-md group duration-300 ">
        <button className="px-2 py-3 bg-yellow-500 rounded-md mr-3 opacity-0 group-hover:opacity-100 duration-300">
          <IoMdTrash color="white" fontSize={20} />
        </button>
        <button className="mr-1 opacity-0 group-hover:opacity-100 duration-300">
          <AiOutlineMinus className="text-yellow-500" fontSize={20} />
        </button>
        <span className="h-8 px-5 text-sm py-1  border-2 border-yellow-500 rounded-full mr-1">
          310 pcs
        </span>
        <button className="mr-1 opacity-0 group-hover:opacity-100 duration-300">
          <AiOutlinePlus className="text-yellow-500" fontSize={20} />
        </button>
      </div>
    </li>
  );
}

export default Shopping;
