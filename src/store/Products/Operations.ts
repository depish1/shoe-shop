import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { EProductsActionTypes } from "./Types";
import { FirebaseMethods } from "utils/firebase/FirebaseHelper";
import { IFilter } from "store/Filters/Types";

export const getProductsFromFirebase =
  (filters: IFilter[]) =>
  async (dispatch: ThunkDispatch<any, void, Action>) => {
    try {
      dispatch({
        type: EProductsActionTypes.PROD_LOADING_ON,
      });

      const getProdsResp = await FirebaseMethods.getProductsWithFiltres(
        filters
      );
      dispatch({
        type: EProductsActionTypes.SET_PRODUCTS,
        payload: getProdsResp,
      });
    } catch (error: any) {
      dispatch({
        type: EProductsActionTypes.PROD_LOADING_OFF,
      });
      switch (error.message) {
        default:
          console.error(error);
          throw new Error(
            "Wystąpił niespodziewany problem. Spróbuj ponownie później "
          );
      }
    }
  };
