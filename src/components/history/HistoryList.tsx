import { useEffect, useState } from "react";
import ShoppingHistory from "../../models/ShoppingHistory";
import History from "./History";
import axiosClient from "../../axiosClient";
import Spinner from "../Spinner";
import { groupedHistory } from "../../helper/utils";

function HistoryList() {
  const [histories, setHistories] = useState<ShoppingHistory[]>([]);
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
    <div>
      {groupedHistory(histories).map((historyList) => (
        <div key={historyList.name} className="mt-5">
          <h2>{historyList.name}</h2>
          <div>
            {historyList.value.map((history) => (
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
      ))}
    </div>
  );
}

export default HistoryList;
