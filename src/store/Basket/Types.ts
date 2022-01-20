export interface IBasketProduct {
  id: string;
  name: string;
  brand: string;
  price: number;
  size: string;
  image: string;
}

export interface IBasketState {
  products: IBasketProduct[];
}

export enum EBasketActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  CLEAR_BASKET = "CLEAR_BASKET",
}
