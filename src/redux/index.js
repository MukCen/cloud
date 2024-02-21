import { combineReducers, createStore } from "redux";

import { userReducer } from "./userReducer";
import { fileReducer } from "./fileRreducer";

const rootReducer = combineReducers({
  user: userReducer,
  file: fileReducer,
});

export const store = createStore(rootReducer);
