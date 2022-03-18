import Cart from "../models/Cart";
import ShoppingHistory from "../models/ShoppingHistory";
import moment from "moment";

interface GroupedCart {
  name: string;
  value: Cart[];
}

interface GroupedHistory {
  name: string;
  value: ShoppingHistory[];
}

export const groupedCart = (carts: Cart[]): GroupedCart[] => {
  const grouped = new Map();

  carts.forEach((cart) => {
    if (grouped.has(cart.category.name)) {
      grouped.get(cart.category.name).push(cart);
    } else {
      grouped.set(cart.category.name, [cart]);
    }
  });

  return Array.from(grouped, ([name, value]) => ({ name, value }));
};

export const groupedHistory = (
  histories: ShoppingHistory[]
): GroupedHistory[] => {
  if (histories === null) return [];

  const grouped = new Map();

  histories.forEach((history) => {
    const date = moment(history.createdAt).format("MMMM YYYY");

    if (grouped.has(date)) {
      grouped.get(date).push(history);
    } else {
      grouped.set(date, [history]);
    }
  });

  return Array.from(grouped, ([name, value]) => ({ name, value }));
};
