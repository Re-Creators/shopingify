import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import axiosClient from "../../axiosClient";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { fetchCategoryItems } from "../../features/categoryItem/categoryItemSlice";
import Category from "../../models/Category";
import { ActionState } from "../../types/enum";
import Spinner from "../Spinner";

function AddItem() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const values = Object.fromEntries(formData.entries());

    try {
      setIsLoading(true);
      await axiosClient.post("/items", values);

      dispatch(fetchCategoryItems());
      dispatch(changeState(ActionState.SHOPPING_LIST));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await axiosClient.get("/categories");
      setCategories(data);
    };

    fetchCategories();
  }, []);
  return (
    <div className="action-bar">
      <div className="pt-8 px-5 bg-white h-full">
        <h1 className="text-2xl font-semibold">Add a new item</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mt-5">
              <label htmlFor="" className="font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
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
                name="note"
              ></textarea>
            </div>
            <div className="flex flex-col mt-5">
              <label htmlFor="" className="font-semibold">
                Image (optional)
              </label>
              <input
                type="text"
                name="imageUrl"
                className="outline-none bg-transparent py-3 px-2 border-2 border-gray-400 focus:border-yellow-500 rounded-md"
              />
            </div>
            <div className="flex flex-col mt-5 relative">
              <label htmlFor="" className="font-semibold">
                Category
              </label>
              <input
                type="text"
                name="category"
                className="outline-none bg-transparent py-3 px-2 border-2 border-gray-400 focus:border-yellow-500 rounded-md"
                autoComplete="off"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <div className="bg-white shadow-md p-2 w-full -bottom-10 left-0 h-40 overflow-y-auto">
                <ul>
                  {categories.map((category) => (
                    <li
                      className="px-3 py-2 cursor-pointer hover:bg-gray-200 rounded-md"
                      key={category._id}
                      onClick={(e) => setCategory(category.name)}
                    >
                      {category.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex mt-5 items-center justify-center">
              <button
                className="mr-5"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(changeState(ActionState.SHOPPING_LIST));
                }}
              >
                Cancel
              </button>
              <button
                className="text-white w-24 py-3 rounded-md bg-yellow-500"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? <Spinner /> : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
