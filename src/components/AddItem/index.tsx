import { useAppDispatch } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { ActionState } from "../../types/enum";

function AddItem() {
  const dispatch = useAppDispatch();

  return (
    <div className="pt-8 px-5 bg-white h-full">
      <h1 className="text-2xl font-semibold">Add a new item</h1>
      <div>
        <div className="flex flex-col mt-5">
          <label htmlFor="" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            className="outline-none bg-transparent py-3 px-2 border-2 border-gray-400 focus:border-yellow-500 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="" className="font-semibold">
            Note (optional)
          </label>
          <textarea
            className="outline-none bg-transparent py-3 px-2 border-2 border-gray-400 focus:border-yellow-500 rounded-md resize-none"
            cols={50}
            rows={3}
          ></textarea>
        </div>
        <div className="flex flex-col mt-5">
          <label htmlFor="" className="font-semibold">
            Image (optional)
          </label>
          <input
            type="text"
            className="outline-none bg-transparent py-3 px-2 border-2 border-gray-400 focus:border-yellow-500 rounded-md"
          />
        </div>
        <div className="flex flex-col mt-5 relative">
          <label htmlFor="" className="font-semibold">
            Category
          </label>
          <input
            type="text"
            className="outline-none bg-transparent py-3 px-2 border-2 border-gray-400 focus:border-yellow-500 rounded-md"
          />
          <div className="absolute bg-white shadow-md p-2 w-full -bottom-10 left-0 hidden">
            <ul>
              <li className="px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-md">
                Fruit and vegetables
              </li>
              <li className="px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-md">
                Meat and Fish
              </li>
              <li className="px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-md">
                Beverages
              </li>
            </ul>
          </div>
        </div>
        <div className="flex mt-10  items-center justify-center">
          <button
            className="mr-5"
            onClick={() => {
              dispatch(changeState(ActionState.SHOPPING_LIST));
            }}
          >
            Cancel
          </button>
          <button className="text-white px-10 py-3 rounded-md bg-yellow-500">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
