import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

// const initailState = {};

const middleWares = [thunk];

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

const store = createStore(
  rootReducer,
  // initailState,
  applyMiddleware(...middleWares)
);

const persistor = persistStore(store);

export { store, persistor };
