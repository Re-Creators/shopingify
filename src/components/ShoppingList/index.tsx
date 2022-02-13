import source from "../../assets/images/source.svg";
import { MdModeEdit } from "react-icons/md";
import ShoppingItems from "../Items/ShoppingItems";

function ShoppingList() {
  return (
    <div className="bg-orange-200 pt-10 px-5 h-full">
      <div className="flex bg-pink-900 w-full p-4 rounded-md">
        <div className="w-32 relative">
          <img
            src={source}
            alt=""
            className="absolute w-4/5 h-[200px] -top-16 left-0"
          />
        </div>
        <div className="">
          <h1 className="text-xl font-semibold text-white">
            Didn’t find what you need?
          </h1>
          <button className="px-4 py-2 bg-white text-black rounded-md mt-5">
            Add Item
          </button>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">Shopping list</h2>
          <button>
            <MdModeEdit fontSize={24} />
          </button>
        </div>
        <div className="mt-5">
          <ShoppingItems />
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-white py-5 px-10 ">
        <div className="w-full relative overflow-hidden">
          <input
            type="text"
            className="w-full py-4 border-yellow-500  border-2 outline-none rounded-md pl-3 pr-20"
            placeholder="Enter a name"
          />
          <button className="absolute h-full bg-yellow-500 right-0 top-0 px-5 rounded-md text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
