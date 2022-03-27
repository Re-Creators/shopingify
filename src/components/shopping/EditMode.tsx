import { Dispatch } from "@reduxjs/toolkit";
import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { saveShopping } from "../../features/shopping/shoppingSlice";
import { groupedCart } from "../../helper/utils";
import Shopping from "./Shopping";
import shoppingImage from "../../assets/images/shopping.svg";

interface Props {
  dispatch: Dispatch;
}

function EditMode({ dispatch }: Props) {
  const cart = useAppSelector((state) => state.shopping.cart);
  const [name, setName] = useState(
    useAppSelector((state) => state.shopping.name)
  );

  const validClassName = (valid: string, invalid: string): string => {
    if (name.trim() === "" || cart.length === 0) return invalid;
    return valid;
  };

  return (
    <>
      <div className="mt-10 md:h-full">
        {cart.length > 0 ? (
          <div className="md:h-full">
            <div className="flex justify-between">
              <h2 className="font-semibold text-xl">Shopping list</h2>
            </div>
            <div className="hide-scrollbar h-1/2">
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
        ) : (
          <div className="flex flex-col items-center md:h-full">
            <div className="font-semibold flex-1">No Items</div>
            <div className="flex-1 mb-72  ">
              <img src={shoppingImage} alt="Shopping" />
            </div>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 inset-x-0 bg-white py-5 px-5 md:px-10 z-10">
        <div className="w-full relative overflow-hidden">
          <input
            type="text"
            className={`w-full py-2 md:py-4  ${validClassName(
              "border-yellow-500",
              "border-gray-400"
            )}  border-2 outline-none rounded-md pl-3 pr-20`}
            placeholder="Enter a name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <button
            className={`absolute h-full ${validClassName(
              "bg-yellow-500",
              "bg-gray-400"
            )} right-0 top-0 px-5 rounded-md text-white`}
            type="submit"
            disabled={name.trim() === "" || cart.length <= 0}
            onClick={() => dispatch(saveShopping(name))}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}

export default EditMode;
