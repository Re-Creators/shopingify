import { Dispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { useAppSelector } from "../../app/hooks";
import { groupedCart } from "../../helper/utils";
import Shopping from "./Shopping";

interface Props {
  dispatch: Dispatch;
}

function EditMode({ dispatch }: Props) {
  const cart = useAppSelector((state) => state.shopping.cart);

  const [name, setName] = useState("");
  return (
    <>
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
            className={`w-full py-4  ${
              name === "" ? "border-gray-400" : "border-yellow-500"
            }  border-2 outline-none rounded-md pl-3 pr-20`}
            placeholder="Enter a name"
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className={`absolute h-full ${
              name === "" ? "bg-gray-400" : "bg-yellow-500"
            } right-0 top-0 px-5 rounded-md text-white`}
            type="submit"
            disabled={name === ""}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditMode;
