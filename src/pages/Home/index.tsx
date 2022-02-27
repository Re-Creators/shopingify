import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useAppDispatch } from "../../app/hooks";
import CategoryItems from "../../components/Items/CategoryItems";
import { fetchItems } from "../../features/items/itemsSlice";

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="p-10 md:w-[60%] lg:w-[69%]">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5">
          <h1 className="text-3xl font-semibold">
            <span className="text-yellow-500">Shoppingify</span> allows you take
            your shopping list wherever you go
          </h1>
        </div>
        <div className="relative w-full lg:w-2/5 rounded-sm overflow-hidden  mt-3 lg:mt-0 shadow-md lg:shadow-none">
          <input
            type="text"
            className="w-full outline-none pl-10 py-3 pr-2 bg-white shadow-md "
            placeholder="search item"
          />
          <AiOutlineSearch className="absolute left-2 top-3" fontSize={24} />
        </div>
      </div>
      <div className="mt-14">
        <CategoryItems />
      </div>
    </div>
  );
}

export default Home;
