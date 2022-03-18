import { useEffect, useState } from "react";
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
      <div className="grid grid-cols-[1fr_1fr_30px] gap-5 items-center">
        <div className="flex items-center text-gray-400">
          <MdOutlineDateRange fontSize={20} />
          <span className="ml-2 text-sm">
            {moment(createdAt).format("llll")}
          </span>
        </div>
        <div
          className={`py-1 px-3 border-2  rounded-full text-center text-sm ${statusColor(
            status
          )}`}
        >
          {status === 0 ? "Completed" : "canceled"}
        </div>
        <div className="">
          <Link to={`/history/${id}`} className="text-yellow-500 text-xl">
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default History;
