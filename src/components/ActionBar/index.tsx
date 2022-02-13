import AddItem from "../AddItem";
import ShoppingList from "../ShoppingList";

function ActionBar() {
  return (
    <div className="w-[27%] min-h-screen relative">
      {/* <ShoppingList /> */}
      <AddItem />
    </div>
  );
}

export default ActionBar;
