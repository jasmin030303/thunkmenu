import { applyMiddleware, createStore } from "redux";
import { Reducer } from "./reducer";
import { composeWithDevToolsLogOnlyInProduction } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";

export const foodStore = createStore(
  Reducer,
  composeWithDevToolsLogOnlyInProduction(applyMiddleware(thunk))
);
