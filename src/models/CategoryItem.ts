import Item from "./Item";

export default interface CategoryItem {
  _id: string;
  name: string;
  items: Item[];
}
