import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useAppDispatch } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { ActionState } from "../../types/enum";

function ItemInfo() {
  const dispatch = useAppDispatch();

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
        <div className="w-full h-52 rounded-lg overflow-hidden">
          <img
            src="https://cdn.idntimes.com/content-images/post/20210921/photo-1601039641847-7857b994d704-ebec26cd6a973a4213931b680c0a88ca.jpg"
            alt="Avocado"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="mt-5">
          <h2 className="text-gray-400">name</h2>
          <p className="text-lg font-semibold">Avocado</p>
        </div>
        <div className="mt-5">
          <h2 className="text-gray-400">category</h2>
          <p className="text-lg font-semibold">Fruit and vegetables</p>
        </div>
        <div className="mt-5">
          <h2 className="text-gray-400">note</h2>
          <p className="text-lg font-semibold">
            Nutrient-dense foods are those that provide substantial amounts of
            vitamins, minerals and other nutrients with relatively few calories.
            One-third of a medium avocado (50 g) has 80 calories and contributes
            nearly 20 vitamins and minerals, making it a great nutrient-dense
            food choice.{" "}
          </p>
        </div>
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
