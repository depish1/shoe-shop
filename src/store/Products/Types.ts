export enum EProductsActionTypes {
  SET_PRODUCTS = "SET_PRODUCTS",
  PROD_LOADING_ON = "PROD_LOADING_ON",
  PROD_LOADING_OFF = "PROD_LOADING_OFF",
}

export interface IProduct {
  name: string;
  price: number;
  brand: string;
  genders: string;
  size: string[];
  images: string[];
}

export interface IProductsState {
  products: null | IProduct[];
  isLoading: boolean;
}
