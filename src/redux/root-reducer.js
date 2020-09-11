import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import user from "./user/user.reducer";
import cart from "./cart/reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistconfig = {
  key: "root",
  storage,
  whitelist: ["cart", "user"]
};

const rootReducer = combineReducers({
  user,
  cart,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistconfig, rootReducer);
