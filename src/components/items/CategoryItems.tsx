import { useAppSelector } from "../../app/hooks";
import Item from "./Item";

function CategoryItems() {
  const categories = useAppSelector((state) => state.categoryItem.categoryItem);
  return (
    <div>
      {categories.map((category) => (
        <div className="mt-5" key={category._id}>
          <h2 className="font-semibold">{category.name}</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-3">
            {category.items.map((item) => (
              <Item
                key={item._id}
                id={item._id}
                name={item.name}
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
