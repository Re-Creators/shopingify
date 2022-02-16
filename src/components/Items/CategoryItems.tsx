import CategoryItem from "../Item/CategoryItem";

function CategoryItems() {
  return (
    <div className="mt-5">
      <h2 className="font-semibold">Fruit and vegetables</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
}

export default CategoryItems;
