import Cart from "../models/Cart";
import Category from "../models/Category";
import { ShoppingListDetail } from "../models/ShoppingListDetail";
import { ShoppingStatus } from "../types/enum";
import moment from "moment";

interface Stats {
  info: {
    name: string;
    _id: string;
  };
  value: number;
}

export interface ChartData {
  month: string;
  items: number;
}

type TopResult = {
  items: Stats[];
  categories: Stats[];
  total_items: number;
};

export const topStats = (list: ShoppingListDetail[]) => {
  const result: TopResult = {
    items: [],
    categories: [],
    total_items: 0,
  };

  const completeList = list.filter(
    (item) => item.status === ShoppingStatus.COMPLETED
  );
  completeList.forEach((s: ShoppingListDetail) => {
    result.total_items += s.items.reduce((acc, curr) => acc + curr.qty, 0);

    s.items.forEach((item: Cart) => {
      const itemExist = result.items.find((i) => i.info._id === item._id);

      if (itemExist) {
        itemExist.value += item.qty;
      } else {
        result.items.push({
          info: {
            name: item.name,
            _id: item._id,
          },
          value: 0,
        });
      }

      const categoryExist = result.categories.find(
        (x) => x.info._id === item.category._id
      );
      if (categoryExist) {
        categoryExist.value += item.qty;
      } else {
        result.categories.push({
          info: {
            _id: item.category._id,
            name: item.category.name,
          },
          value: item.qty,
        });
      }
    });
  });

  return result;
};

export const getChartData = (list: ShoppingListDetail[]) => {
  let result: ChartData[] = [];

  const completeList = list.filter(
    (item) => item.status === ShoppingStatus.COMPLETED
  );

  completeList.forEach((s: ShoppingListDetail) => {
    const date = moment(s.createdAt);
    const monthName = date.format("MMMM");

    if (date.format("YYYY") === moment().format("YYYY")) {
      s.items.forEach((item: Cart) => {
        const monthExist = result.find((x) => x.month === monthName);

        if (monthExist) {
          monthExist.items += item.qty;
        } else {
          result.push({
            month: monthName,
            items: 0,
          });
        }
      });
    }
  });

  return result;
};
