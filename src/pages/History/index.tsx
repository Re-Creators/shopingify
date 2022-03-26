import { useEffect, useState } from "react";
import HistoryList from "../../components/history/HistoryList";
import axiosClient from "../../axiosClient";
import ShoppingHistory from "../../models/ShoppingHistory";
import Spinner from "../../components/Spinner";

function History() {
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
    <div className="p-5 pb-16 md:p-10 hide-scrollbar">
      <h1 className="text-xl md:text-2xl font-semibold">Shopping history</h1>
      <div>
        <HistoryList histories={histories} />
      </div>
    </div>
  );
}

export default History;
