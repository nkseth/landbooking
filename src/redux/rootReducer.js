import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import user from "./slices/user";
import popularlisting from "./slices/popularlisting";
// import productReducer from "./slices/product";


// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["user"],
};


const rootReducer = combineReducers({
 user,
 popularlisting
});

export { rootPersistConfig, rootReducer };
