import logo from "../../assets/images/logo.svg";
import {
  AiOutlineShoppingCart,
  AiOutlineOrderedList,
  AiOutlineHistory,
} from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import TippyInfo from "../TippyInfo";

function MenuBar() {
  return (
    <div className="min-h-screen bg-white w-[8%] flex flex-col items-center justify-between py-8">
      <div className="">
        <img src={logo} alt="Logo" />
      </div>
      <div className="">
        <ul className="flex flex-col">
          <li className="">
            <TippyInfo content="Items">
              <a href="/">
                <AiOutlineOrderedList fontSize={24} />
              </a>
            </TippyInfo>
          </li>
          <li className="mt-14">
            <TippyInfo content="History">
              <a href="/">
                <AiOutlineHistory fontSize={24} />
              </a>
            </TippyInfo>
          </li>
          <li className="mt-14">
            <TippyInfo content="Statistics">
              <a href="/">
                <GoGraph fontSize={24} />
              </a>
            </TippyInfo>
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
