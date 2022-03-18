import Cart from "./Cart";

export default interface ShoppingHistoryDetail {
  _id: string;
  items: Cart[];
  info: {
    name: string;
    _id: string;
    createdAt: string;
  };
}
