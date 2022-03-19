import { MdCheckBox, MdCheckBoxOutlineBlank, MdModeEdit } from "react-icons/md";
import { useAppSelector } from "../../app/hooks";
import { groupedCart } from "../../helper/utils";
import { Dispatch } from "@reduxjs/toolkit";
import {
  changeMode,
  markComplete,
  resetShopping,
} from "../../features/shopping/shoppingSlice";
import { ShoppingMode, ShoppingStatus } from "../../types/enum";
import axiosClient from "../../axiosClient";
import CancelModal from "../../modals/CancelModal";
import { useState } from "react";
import ModalContainer from "../../modals/ModalContainer";

interface Props {
  dispatch: Dispatch;
}

function SavedMode({ dispatch }: Props) {
  const cart = useAppSelector((state) => state.shopping.cart);
  const name = useAppSelector((state) => state.shopping.name);

  const [showModal, setShowModal] = useState(false);
  const markHandler = (id: string) => {
    dispatch(markComplete(id));
  };

  const submitShopping = async (status: ShoppingStatus) => {
    const shoppingData = {
      name,
      status,
      user: "62171a4ff5203c38dcfc437c",
      items: cart.map((item) => {
        return {
          _id: item._id,
          qty: item.qty,
          category: item.category._id,
          name: item.name,
        };
      }),
    };

    await axiosClient.post("/shopping", shoppingData);
    dispatch(resetShopping());
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
        <button className="py-3  px-5" onClick={() => setShowModal(true)}>
          cancel
        </button>
        <button
          className="py-3 bg-blue-600 px-5 rounded-md text-white"
          onClick={() => submitShopping(ShoppingStatus.COMPLETED)}
        >
          Complete
        </button>
      </div>
      <ModalContainer onClose={() => setShowModal(false)} isShow={showModal}>
        <CancelModal
          onClose={() => setShowModal(false)}
          onSubmit={() => {
            setShowModal(false);
            submitShopping(ShoppingStatus.CANCELED);
          }}
        />
      </ModalContainer>
    </>
  );
}

export default SavedMode;
