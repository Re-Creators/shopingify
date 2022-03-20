import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import CategoryItems from "../../components/items/CategoryItems";
import SearchInput from "../../components/SearchInput";
import Spinner from "../../components/Spinner";
import {
  fetchCategoryItems,
  searchCategoryItems,
} from "../../features/categoryItem/categoryItemSlice";

function Home() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.categoryItem.isLoading);

  const handleSearch = useCallback(
    (name: string) => {
      if (name.trim() === "") {
        dispatch(fetchCategoryItems());
      } else {
        dispatch(searchCategoryItems(name));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchCategoryItems());
  }, [dispatch]);

  return (
    <div className="p-10  hide-scrollbar">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5">
          <h1 className="text-3xl font-semibold">
            <span className="text-yellow-500">Shoppingify</span> allows you take
            your shopping list wherever you go
          </h1>
        </div>
        <SearchInput doSearch={handleSearch} />
      </div>

      <div className="mt-14">
        {loading ? <Spinner classSize="w-10 h-10" /> : <CategoryItems />}
      </div>
    </div>
  );
}

export default Home;
