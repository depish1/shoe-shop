import { combineReducers } from "redux";
import userDataReducer from "./UserData/Reducer";
import modalReducer from "./Modal/Reducer";

export default combineReducers({ userDataReducer, modalReducer });
