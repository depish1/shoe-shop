import { EBasketActionTypes, IBasketProduct } from "./Types";

interface IAddProductAction {
  type: EBasketActionTypes.ADD_PRODUCT;
  payload: IBasketProduct;
}
interface IRemoveProductAction {
  type: EBasketActionTypes.REMOVE_PRODUCT;
  payload: string;
}
interface IClearBasketAction {
  type: EBasketActionTypes.CLEAR_BASKET;
}

export type TBasketActions =
  | IAddProductAction
  | IRemoveProductAction
  | IClearBasketAction;
