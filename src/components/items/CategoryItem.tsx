import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useAppDispatch } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { setSelectedItem } from "../../features/categoryItem/categoryItemSlice";
import { addToCart } from "../../features/shopping/shoppingSlice";
import Cart from "../../models/Cart";
import Category from "../../models/Category";
import Item from "../../models/Item";
import { ActionState } from "../../types/enum";

interface Props {
  item: Item;
  category: Category;
}

function CategoryItem({ item, category }: Props) {
  const dispatch = useAppDispatch();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    const newItem: Cart = {
      _id: item._id,
      name: item.name,
      qty: 1,
      isCompleted: false,
      category,
    };

    dispatch(addToCart(newItem));
  };

  const selectHandler = () => {
    const selectedItem = {
      ...item,
      category: category.name,
    };
    dispatch(setSelectedItem(selectedItem));
    dispatch(changeState(ActionState.ITEM_INFO));
  };
  return (
    <div
      className="bg-white p-3 rounded-md shadow-md flex items-center cursor-pointer"
      onClick={selectHandler}
    >
      <span className="grow line-clamp-2">{item.name}</span>
      <button onClick={handleClick}>
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default CategoryItem;
