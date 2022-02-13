import source from "../../assets/images/source.svg";
import { MdModeEdit } from "react-icons/md";
import ShoppingItems from "../Items/ShoppingItems";

function ActionBar() {
  return (
    <div className="w-[27%] min-h-screen bg-orange-200 pt-10 px-5">
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
    </div>
  );
}

export default ActionBar;
