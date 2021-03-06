import thunk, { ThunkMiddleware } from "redux-thunk";
import rootReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { Action } from "redux";

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk as ThunkMiddleware<any, Action<any>>)
  )
);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
