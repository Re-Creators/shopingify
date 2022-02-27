import { AiOutlinePlus } from "react-icons/ai";
import { useAppDispatch } from "../../app/hooks";
import { changeState } from "../../features/actionBarState/actionBarStateSlice";
import { ActionState } from "../../types/enum";

interface Props {
  name: string;
}

function Item({ name }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div
      className="bg-white p-3 rounded-md shadow-md flex items-center cursor-pointer"
      onClick={() => {
        dispatch(changeState(ActionState.ITEM_INFO));
      }}
    >
      <span className="grow line-clamp-2">{name}</span>
      <button>
        <AiOutlinePlus />
      </button>
    </div>
  );
}

export default Item;
