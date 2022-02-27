import HistoryList from "../../components/history/HistoryList";

function History() {
  return (
    <div className="p-10 w-[69%]">
      <h1 className="text-2xl font-semibold">Shopping history</h1>
      <div>
        <HistoryList />
      </div>
    </div>
  );
}

export default History;
