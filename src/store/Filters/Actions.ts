import { EFilterActionTypes, IFilter } from "./Types";

interface ISetFiltersAction {
  type: EFilterActionTypes.SET_FILTERS;
  payload: IFilter[];
}
interface IClearFiltersAction {
  type: EFilterActionTypes.CLEAR_FILTERS;
}

export type TFiltersActions = ISetFiltersAction | IClearFiltersAction;
