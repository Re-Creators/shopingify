import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAppDispatch } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { addToCart } from "../../features/shopping/shoppingSlice";
import Cart from "../../models/Cart";
import Category from "../../models/Category";
import { ActionState } from "../../types/enum";

interface Props {
  id: string;
  name: string;
  category: Category;
}

function Item({ id, name, category }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const newItem: Cart = {
      _id: id,
      name,
      qty: 1,
      isCompleted: false,
      category,
    };

    dispatch(addToCart(newItem));
  };
  return (
    <div
      className="bg-white p-3 rounded-md shadow-md flex items-center cursor-pointer"
      onClick={() => {
        dispatch(changeState(ActionState.ITEM_INFO));
      }}
    >
      <span className="grow line-clamp-2">{name}</span>
      <button onClick={handleClick}>
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default Item;
