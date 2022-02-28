import { MdCheckBox, MdCheckBoxOutlineBlank, MdModeEdit } from "react-icons/md";
import { useAppSelector } from "../../app/hooks";
import { groupedCart } from "../../helper/utils";
import { Dispatch } from "@reduxjs/toolkit";
import {
  changeMode,
  markComplete,
} from "../../features/shopping/shoppingSlice";
import { ShoppingMode } from "../../types/enum";

interface Props {
  dispatch: Dispatch;
}

function SavedMode({ dispatch }: Props) {
  const cart = useAppSelector((state) => state.shopping.cart);

  const markHandler = (id: string) => {
    dispatch(markComplete(id));
  };
  return (
    <>
      <div className="mt-10 h-full">
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl">Shopping list</h2>
          <button onClick={() => dispatch(changeMode(ShoppingMode.EDIT))}>
            <MdModeEdit fontSize={24} />
          </button>
        </div>
        <div className="mt-5 hide-scrollbar h-1/2">
          {groupedCart(cart).map((cartList) => (
            <div className="mt-2" key={cartList.name}>
              <h2>{cartList.name}</h2>
              <ul className="mt-3">
                {cartList.value.map((item) => (
                  <li
                    className="flex items-center justify-between mb-3"
                    key={item._id}
                  >
                    <button
                      className="text-yellow-500 text-3xl"
                      onClick={() => markHandler(item._id)}
                    >
                      {item.isCompleted ? (
                        <MdCheckBox />
                      ) : (
                        <MdCheckBoxOutlineBlank />
                      )}
                    </button>
                    <div
                      className={`w-[220px] line-clamp-2 ${
                        item.isCompleted ? "line-through" : ""
                      } `}
                    >
                      {item.name}
                    </div>
                    <div className="border-yellow-500 rounded-full border-2 px-3 py-1 text-yellow-500">
                      {item.qty} pcs
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-white py-5 px-10 flex items-center justify-center ">
        <button className="py-3  px-5">cancel</button>
        <button className="py-3 bg-blue-600 px-5 rounded-md text-white">
          Complete
        </button>
      </div>
    </>
  );
}

export default SavedMode;
