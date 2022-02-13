import AddItem from "../AddItem";
import ItemInfo from "../ItemInfo";
import ShoppingList from "../ShoppingList";

function ActionBar() {
  return (
    <div className="w-[27%] min-h-screen relative">
      {/* <ShoppingList /> */}
      {/* <AddItem /> */}
      <ItemInfo />
    </div>
  );
}

export default ActionBar;
