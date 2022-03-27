import AddItem from "../AddItem";
import ItemInfo from "../ItemInfo";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ActionState } from "../../types/enum";
import { useAppSelector } from "../../app/hooks";
import ShoppingList from "../shopping/ShoppingList";

function ActionBar() {
  const actionState = useAppSelector((state) => state.actionBarState.value);
  const renderAction = (actionState: ActionState) => {
    if (actionState === ActionState.SHOPPING_LIST) return <ShoppingList />;
    else if (actionState === ActionState.ADD_ITEM) return <AddItem />;
    else if (actionState === ActionState.ITEM_INFO) return <ItemInfo />;
    else return <div className="hidden"></div>;
  };

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={actionState}
        addEvenetListener={(node: any, done: any) => {
          node.addEvenetListener("transitioned", done, false);
        }}
        classNames="slide"
        timeout={300}
      >
        {renderAction(actionState)}
      </CSSTransition>
    </SwitchTransition>
  );
}

export default ActionBar;
