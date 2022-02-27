import { useAppSelector } from "../../app/hooks";

function CategoryItem() {
  const categories = useAppSelector((state) => state.categoryItem.categoryItem);

  return (
    <div className="mt-5">
      {categories.map((category) => (
        <div key={category._id}>
          <h2 className="font-semibold">{category.name}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
            <CategoryItem />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryItem;
