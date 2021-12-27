import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { UserDataActions } from "./UserData/Types";
import { Action, ActionCreator, Dispatch } from "redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<any, Action<UserDataActions>>)
  )
);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
