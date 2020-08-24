import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import user from "./user/user.reducer";
import cart from "./cart/reducer";

const persistconfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user,
  cart
});

export default persistReducer(persistconfig, rootReducer);
