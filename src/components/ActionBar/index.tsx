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
    return <ItemInfo />;
  };
  console.log("render ActionBar");
  return (
    <div className="md:w-[40%] lg:w-[25%] min-h-screen relative shadow-md">
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
    </div>
  );
}

export default ActionBar;
