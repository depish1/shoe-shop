import { combineReducers } from "redux";
import userDataReducer from "./UserData/Reducer";
import modalReducer from "./Modal/Reducer";
import productReducer from "./Products/Reducer";
import filtersReducer from "./Filters/Reducer";
import menuReducer from "./Menu/Reducer";
import basketReducer from "./Basket/Reducer";

export default combineReducers({
  userDataReducer,
  modalReducer,
  productReducer,
  filtersReducer,
  menuReducer,
  basketReducer,
});
