import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import { useAppDispatch } from "../../app/hooks";
import { removeFromCart, updateQty } from "../../features/cart/cartSlice";
import { UpdateQtyMode } from "../../types/enum";

interface ShoppingProps {
  id: string;
  name: string;
  qty: number;
}
function Shopping({ name, qty, id }: ShoppingProps) {
  const dispatch = useAppDispatch();

  const increseHandler = () => {
    dispatch(updateQty({ _id: id, mode: UpdateQtyMode.INCRESE }));
  };

  const decreseHandler = () => {
    dispatch(updateQty({ _id: id, mode: UpdateQtyMode.DECREASE }));
  };

  const removeHandler = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <li className="flex items-center relative mt-6">
      <div className="font-semibold line-clamp-2 w-[220px]">{name}</div>
      <div className="absolute right-0 hover:bg-white flex items-center rounded-md group duration-300 ">
        <button
          className="px-2 py-3 bg-yellow-500 rounded-md mr-3 opacity-0 group-hover:opacity-100 duration-300"
          onClick={removeHandler}
        >
          <IoMdTrash color="white" fontSize={20} />
        </button>
        <button
          className="mr-1 opacity-0 group-hover:opacity-100 duration-300"
          disabled={qty === 1}
          onClick={decreseHandler}
        >
          <AiOutlineMinus
            className={qty === 1 ? "" : "text-yellow-500"}
            fontSize={20}
          />
        </button>
        <span className="h-8 px-5 text-sm py-1  border-2 border-yellow-500 rounded-full mr-1">
          {qty} pcs
        </span>
        <button
          className="mr-1 opacity-0 group-hover:opacity-100 duration-300"
          onClick={increseHandler}
        >
          <AiOutlinePlus className="text-yellow-500" fontSize={20} />
        </button>
      </div>
    </li>
  );
}

export default Shopping;
