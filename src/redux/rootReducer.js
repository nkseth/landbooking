import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import user from "./slices/user";
import popularlisting from "./slices/popularlisting";
// import productReducer from "./slices/product";
import categories from "./slices/categories";
import amenity from "./slices/amenity"
import location from './slices/location'
import reservartions from './slices/reservations'
// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["user"],
};


const rootReducer = combineReducers({
 user,
 popularlisting,
 categories,
 amenity,
 location,
 reservartions
});

export { rootPersistConfig, rootReducer };
