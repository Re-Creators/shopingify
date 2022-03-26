import { FaChevronRight } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import moment from "moment";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  name: string;
  createdAt: string;
  status: number;
}

const statusColor = (status: number) =>
  status === 0
    ? "text-blue-500 border-blue-500"
    : "text-red-500 border-red-500";

function History({ name, createdAt, status, id }: Props) {
  return (
    <div className="flex bg-white px-3 py-4 justify-between items-center  shadow-md mt-3 rounded-md">
      <div className="font-semibold">{name}</div>
      <div className="grid md:grid-cols-[120px_120px_30px] gap-5 items-center">
        <div className="hidden md:flex items-center text-gray-400">
          <MdOutlineDateRange fontSize={20} />
          <span className="ml-2 text-sm">{moment(createdAt).format("ll")}</span>
        </div>
        <div
          className={`py-1 px-3 border-2  rounded-full text-center text-xs md:text-sm ${statusColor(
            status
          )}`}
        >
          {status === 0 ? "completed" : "canceled"}
        </div>
        <div className="hidden md:block">
          <Link to={`/history/${id}`} className="text-yellow-500 text-xl">
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default History;
