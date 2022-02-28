import source from "../../assets/images/source.svg";
import { useAppDispatch } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { ActionState } from "../../types/enum";
import EditMode from "./EditMode";
import SavedMode from "./SavedMode";

function ShoppingList() {
  const dispatch = useAppDispatch();

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
      {/* <EditMode dispatch={dispatch} /> */}
      <SavedMode />
    </div>
  );
}

export default ShoppingList;
