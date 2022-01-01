import { EProductsActionTypes, IProduct } from "./Types";

interface IProdLoadingOnAction {
  type: EProductsActionTypes.PROD_LOADING_ON;
}

interface IProdLoadingOffAction {
  type: EProductsActionTypes.PROD_LOADING_OFF;
}

interface ISetProductsAction {
  type: EProductsActionTypes.SET_PRODUCTS;
  payload: IProduct[];
}

export type TProductsActions =
  | IProdLoadingOnAction
  | IProdLoadingOffAction
  | ISetProductsAction;
