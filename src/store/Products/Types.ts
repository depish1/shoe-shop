export enum EProductsActionTypes {
  SET_PRODUCTS = "SET_PRODUCTS",
  PROD_LOADING_ON = "PROD_LOADING_ON",
  PROD_LOADING_OFF = "PROD_LOADING_OFF",
}

export interface IProduct {
  name: string;
  id: string;
  price: number;
  brand: string;
  gender: string;
  size: string[];
  images: string[];
}

export interface IProductsState {
  products: IProduct[];
  isLoading: boolean;
}
