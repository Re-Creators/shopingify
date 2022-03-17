import { useEffect, useState } from "react";
import ShoppingHistory from "../../models/ShoppingHistory";
import History from "./History";
import axiosClient from "../../axiosClient";

function HistoryList() {
  const [histories, setHistories] = useState<ShoppingHistory[]>();

  useEffect(() => {
    const fetchHistories = async () => {
      const { data } = await axiosClient.get("/shopping/history");
      setHistories(data);
    };

    fetchHistories();
  }, []);

  return (
    <div className="mt-5">
      <h2>August 2020</h2>
      <div>
        {histories?.map((history) => (
          <History
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
