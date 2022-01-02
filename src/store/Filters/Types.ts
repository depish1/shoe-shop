import { WhereFilterOp } from "firebase/firestore";

export enum EFilterActionTypes {
  SET_FILTERS = "SET_FILTERS",
  CLEAR_FILTERS = "CLEAR_FILTERS",
}

export interface IFilter {
  field: string;
  how: WhereFilterOp;
  value: any;
}

export interface IFiltersState {
  gender: IFilter | null;
}
