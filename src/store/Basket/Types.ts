export interface IProduct {
  name: string;
  id: string;
  price: number;
  brand: string;
  gender: string;
  size: string[];
  images: string[];
}

export interface IBasketState {
  products: IProduct[];
}

export enum EBasketActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_BASKET = "CLEAR_BASKET",
}
