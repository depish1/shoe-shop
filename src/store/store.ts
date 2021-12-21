import thunk from "redux-thunk";
import rootReducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
