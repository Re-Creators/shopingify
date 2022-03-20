import { Link, useParams } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import ShoppingHistoryDetail from "../../models/ShoppingHistoryDetail";
import { useEffect, useState } from "react";
import axiosClient from "../../axiosClient/index";
import Spinner from "../../components/Spinner";
import moment from "moment";
import { groupedCart } from "../../helper/utils";

function HistoryDetail() {
  const [data, setData] = useState<ShoppingHistoryDetail | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosClient.get(`/shopping/detail/${id}`);

      setData(data);
    };
    fetchData();
  }, [id]);

  if (data === null) return <Spinner classSize="w-10 h-10" />;
  return (
    <div className="p-10 hide-scrollbar">
      <div className="flex flex-col">
        <Link
          to="/history"
          className="flex items-center text-sm text-yellow-400 mb-5"
        >
          <BsArrowLeft className="mr-2" />
          back
        </Link>
        <div>
          <h1 className="text-2xl font-semibold">{data.info.name}</h1>
          <div className="flex items-center text-gray-400 mt-3">
            <MdOutlineDateRange fontSize={18} />
            <span className="ml-1 text-xs">
              {moment(data.info.createdAt).format("llll")}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-14">
        {groupedCart(data.items).map((cartList) => (
          <div className="mt-5" key={cartList.name}>
            <h2 className="font-semibold">{cartList.name}</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
              {cartList.value.map((item) => (
                <div
                  className="bg-white p-3 rounded-md shadow-md flex justify-between  cursor-pointer"
                  key={item._id}
                >
                  <span className="line-clamp-2">{item.name}</span>
                  <span className="text-xs text-yellow-400 min-w-[30px]">
                    {item.qty} pcs
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HistoryDetail;
