import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";

// const initailState = {};

const middleWares = [logger];

const store = createStore(
  rootReducer,
  // initailState,
  applyMiddleware(...middleWares)
);

const persistor = persistStore(store);

export { store, persistor };
