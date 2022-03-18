import { useEffect, useState } from "react";
import ShoppingHistory from "../../models/ShoppingHistory";
import History from "./History";
import axiosClient from "../../axiosClient";
import Spinner from "../Spinner";

function HistoryList() {
  const [histories, setHistories] = useState<ShoppingHistory[]>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchHistories = async () => {
      setIsLoading(true);
      const { data } = await axiosClient.get("/shopping/history");
      setIsLoading(false);
      setHistories(data);
    };

    fetchHistories();
  }, []);

  if (isLoading) return <Spinner classSize="w-10 h-10" />;

  return (
    <div className="mt-5">
      <h2>August 2020</h2>
      <div>
        {histories?.map((history) => (
          <History
            id={history._id}
            name={history.name}
            key={history._id}
            createdAt={history.createdAt}
            status={history.status}
          />
        ))}
      </div>
    </div>
  );
}

export default HistoryList;
