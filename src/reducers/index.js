// import { applyMiddleware, combineReducers, createStore } from "redux";
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import userReducer from "./userReducer";
import fileReducer from "./fileReducer";

const rootReducer = combineReducers({
  user: userReducer,
  files: fileReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// import { createStore, compose, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

// import rootReducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// export default store;
