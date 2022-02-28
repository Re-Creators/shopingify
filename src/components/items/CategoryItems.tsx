import { useAppSelector } from "../../app/hooks";
import CategoryItem from "./CategoryItem";

function CategoryItems() {
  const categories = useAppSelector((state) => state.categoryItem.categoryItem);
  return (
    <div>
      {categories.map((category) => (
        <div className="mt-5" key={category._id}>
          <h2 className="font-semibold">{category.name}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
            {category.items.map((item) => (
              <CategoryItem
                key={item._id}
                item={item}
                category={{
                  _id: category._id,
                  name: category.name,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryItems;
