import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import TopItem from "../../components/statistic/TopItem";
import { fetchStats } from "../../features/statistic/statisticSlice";
import { topStats } from "../../helper/convertToStats";

const getPercentage = (value: number, total: number) =>
  Math.floor((value / total) * 100);

function Statistic() {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.statistic.list);
  const loading = useAppSelector((state) => state.statistic.loading);
  const stats = useMemo(() => {
    const top = topStats(list);
    top.items = top.items.sort((a, b) => b.value - a.value).slice(0, 3);
    top.categories = top.categories
      .sort((a, b) => b.value - a.value)
      .slice(0, 3);

    return top;
  }, [list]);

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  return (
    <div className="py-10 px-20">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1 className="text-xl font-semibold">Top Items</h1>
          <div className="mt-5 text-sm">
            {stats.items.map((item) => (
              <TopItem
                key={item.info._id}
                name={item.info.name}
                value={getPercentage(item.value, stats.total_items)}
                color="bg-yellow-400"
              />
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Top Categories</h1>
          <div className="mt-5 text-sm">
            {stats.categories.map((item) => (
              <TopItem
                key={item.info._id}
                name={item.info.name}
                value={getPercentage(item.value, stats.total_items)}
                color="bg-blue-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistic;
