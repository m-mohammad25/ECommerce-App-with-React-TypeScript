export interface TProduct {
  id: number;
  title: string;
  cat_prefix: string;
  img: string;
  price: number;
  max: number;
  quantity?: number;
}
