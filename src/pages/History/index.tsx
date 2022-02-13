import { MdOutlineDateRange } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import HistoryItems from "../../components/Items/HistoryItems";

function History() {
  return (
    <div className="p-10 w-[65%]">
      <h1 className="text-2xl font-semibold">Shopping history</h1>
      <div>
        <HistoryItems />
      </div>
    </div>
  );
}

export default History;
