import source from "../../assets/images/source.svg";
import { MdModeEdit } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { ActionState } from "../../types/enum";
import Shopping from "./Shopping";
import { groupedCart } from "../../helper/utils";

function ShoppingList() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);

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
          <button
            className="px-4 py-2 bg-white text-black rounded-md mt-5"
            onClick={() => {
              dispatch(changeState(ActionState.ADD_ITEM));
            }}
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="mt-10 h-full">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">Shopping list</h2>
          <button>
            <MdModeEdit fontSize={24} />
          </button>
        </div>
        <div className="mt-5 hide-scrollbar h-1/2">
          {groupedCart(cart).map((cartList) => (
            <div className="mt-5" key={cartList.name}>
              <h2>{cartList.name}</h2>
              {cartList.value.map((item) => (
                <Shopping
                  key={item._id}
                  qty={item.qty}
                  name={item.name}
                  id={item._id}
                />
              ))}
            </div>
          ))}
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
