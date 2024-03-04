import { isSale } from "./saleType";

export type Food = {
  _id: string;
  name: string;
  price: number;
  _v: number;
  category: string;
  isSale:
    | boolean
    | {
        isSale: boolean;
        salePercent: number;
      };
  img: string;
  count: number;
};
