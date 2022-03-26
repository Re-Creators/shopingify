import logo from "../../assets/images/logo.svg";
import {
  AiOutlineShoppingCart,
  AiOutlineOrderedList,
  AiOutlineHistory,
} from "react-icons/ai";
import { GoGraph } from "react-icons/go";
import Tooltip from "../Tooltip";
import CustomLink from "../CustomLink";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import checkScreen from "../../helper/checkScreen";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { ActionState } from "../../types/enum";

const isMobile = checkScreen();

function MenuBar() {
  const cart = useAppSelector((state) => state.shopping.cart);
  const dispatch = useAppDispatch();
  const actionState = useAppSelector((state) => state.actionBarState.value);

  const toggleActionBar = () => {
    if (isMobile) {
      const state =
        actionState === ActionState.HIDDEN
          ? ActionState.SHOPPING_LIST
          : ActionState.HIDDEN;
      dispatch(changeState(state));
    }
  };
  return (
    <div className="h-screen bg-white flex flex-col items-center justify-between py-16">
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
              <CustomLink to="/statistic" className="flex justify-center">
                <GoGraph fontSize={24} />
              </CustomLink>
            </Tooltip>
          </li>
        </ul>
      </div>
      <div
        className="md:w-10 md:h-10 lg:w-14 lg:h-14 bg-yellow-600 p-2 rounded-full flex items-center justify-center relative text-white"
        onClick={toggleActionBar}
      >
        <AiOutlineShoppingCart fontSize={24} />
        <div className="md:text-xs lg:text-base px-2 bg-red-500 absolute rounded-md -top-1 -right-1">
          {cart.reduce((acc, item) => acc + item.qty, 0)}
        </div>
      </div>
    </div>
  );
}

export default MenuBar;
