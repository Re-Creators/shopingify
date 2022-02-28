import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { ActionState } from "../../types/enum";

function ItemInfo() {
  const dispatch = useAppDispatch();
  const selectedItem = useAppSelector(
    (state) => state.categoryItem.selectedItem
  );

  return (
    <div className="pt-8 px-5 bg-white shadow-md h-full overflow-y-auto">
      <button
        className="flex text-yellow-500 items-center text-lg"
        onClick={() => {
          dispatch(changeState(ActionState.SHOPPING_LIST));
        }}
      >
        <HiOutlineArrowNarrowLeft /> <span className="ml-2">back</span>
      </button>
      <div className="mt-5">
        {selectedItem?.image && (
          <div className="w-full h-52 rounded-lg overflow-hidden">
            <img
              src={selectedItem.image}
              alt="Avocado"
              className="w-full h-full object-cover object-center"
            />
          </div>
        )}

        <div className="mt-5">
          <h2 className="text-gray-400">name</h2>
          <p className="text-lg font-semibold">{selectedItem?.name}</p>
        </div>
        <div className="mt-5">
          <h2 className="text-gray-400">category</h2>
          <p className="text-lg font-semibold">{selectedItem?.category}</p>
        </div>
        {selectedItem?.note && (
          <div className="mt-5">
            <h2 className="text-gray-400">note</h2>
            <p className="text-lg font-semibold">{selectedItem.note}</p>
          </div>
        )}

        <div className="flex mt-10 mb-10  items-center justify-center">
          <button className="mr-5">delete</button>
          <button className="text-white px-10 py-3 rounded-md bg-yellow-500">
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemInfo;
