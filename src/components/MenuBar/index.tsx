import logo from "../../assets/images/logo.svg";
import {
  AiOutlineShoppingCart,
  AiOutlineOrderedList,
  AiOutlineHistory,
} from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import { Link } from "react-router-dom";
import Tooltip from "../Tooltip";
import CustomLink from "../CustomLink";

function MenuBar() {
  return (
    <div className="min-h-screen bg-white w-[6%] flex flex-col items-center justify-between py-8">
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
      <div className="w-full">
        <ul className="flex flex-col">
          <li className="w-full">
            <Tooltip content="Items">
              <CustomLink to="/" className="flex justify-center">
                <AiOutlineOrderedList fontSize={24} />
              </CustomLink>
            </Tooltip>
          </li>
          <li className="mt-14">
            <Tooltip content="History">
              <CustomLink to="/history" className="flex justify-center">
                <AiOutlineHistory fontSize={24} />
              </CustomLink>
            </Tooltip>
          </li>
          <li className="mt-14">
            <Tooltip content="Statistics">
              <CustomLink to="/" className="flex justify-center">
                <GoGraph fontSize={24} />
              </CustomLink>
            </Tooltip>
          </li>
        </ul>
      </div>
      <div className="w-14 h-14 bg-yellow-600 p-2 rounded-full flex items-center justify-center relative text-white">
        <AiOutlineShoppingCart fontSize={24} />
        <div className="px-2 bg-red-500 absolute rounded-md -top-1 -right-1">
          3
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
