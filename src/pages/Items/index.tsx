import React from "react";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

function Items() {
  return (
    <div className="p-10 w-[65%]">
      <div className="flex">
        <div className="w-3/5">
          <h1 className="text-3xl font-semibold">
            <span className="text-yellow-500">Shoppingify</span> allows you take
            your shopping list wherever you go
          </h1>
        </div>
        <div className="relative w-2/5 rounded-sm overflow-hidden">
          <input
            type="text"
            className="w-full outline-none pl-10 py-3 pr-2 bg-white shadow-md "
            placeholder="search item"
          />
          <AiOutlineSearch className="absolute left-2 top-3" fontSize={24} />
        </div>
      </div>
      <div className="mt-14">
        <div className="mt-5">
          <h2 className="font-semibold">Fruit and vegetables</h2>
          <div className="grid grid-cols-4 gap-5 mt-3">
            <div className="bg-white p-3 rounded-md shadow-md flex items-center">
              <span className="grow line-clamp-2">
                Mandarin Nadorcott Piele De
              </span>
              <button>
                <AiOutlinePlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Items;
