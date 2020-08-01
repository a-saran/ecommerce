import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// const initailState = {};

const middleWares = [logger];

const store = createStore(
  rootReducer,
  // initailState,
  applyMiddleware(...middleWares)
);

export default store;
