import HistoryList from "../../components/history/HistoryList";

function History() {
  return (
    <div className="p-5 pb-16 md:p-10 hide-scrollbar">
      <h1 className="text-xl md:text-2xl font-semibold">Shopping history</h1>
      <div>
        <HistoryList />
      </div>
    </div>
  );
}

export default History;
