import { useState } from "react";
import AddItem from "../AddItem";
import ItemInfo from "../ItemInfo";
import ShoppingList from "../ShoppingList";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { ActionState } from "../../types/enum";
import { useAppSelector } from "../../app/hooks";

function ActionBar() {
  const actionState = useAppSelector((state) => state.actionBarState.value);

  const renderAction = (actionState: ActionState) => {
    if (actionState === ActionState.SHOPPING_LIST) return <ShoppingList />;
    else if (actionState === ActionState.ADD_ITEM) return <AddItem />;
    return <ItemInfo />;
  };

  return (
    <div className="w-[27%] min-h-screen relative shadow-md">
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
