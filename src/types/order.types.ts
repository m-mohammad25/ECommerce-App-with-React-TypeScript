import { TProduct } from "./product.types";

export type TOrderItem = {
  id: number; //auto generated by database
  userId: number;
  items: TProduct[];
  total: number;
};
