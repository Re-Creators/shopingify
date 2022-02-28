import Cart from "../models/Cart";

interface GroupedCart {
  name: string;
  value: Cart[];
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
