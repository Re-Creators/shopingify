import Cart from "./Cart";

export interface ShoppingListDetail {
  _id: string;
  name: string;
  createdAt: string;
  status: number;
  items: Cart[];
}
