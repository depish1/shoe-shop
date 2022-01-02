import { EFilterActionTypes, IFiltersState } from "./Types";

interface ISetFiltersAction {
  type: EFilterActionTypes.SET_FILTERS;
  payload: IFiltersState;
}
interface IClearFiltersAction {
  type: EFilterActionTypes.CLEAR_FILTERS;
}

export type TFiltersActions = ISetFiltersAction | IClearFiltersAction;
