import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
// slices
import user from "./slices/user";
import popularlisting from "./slices/popularlisting";
// import productReducer from "./slices/product";
import categories from "./slices/categories";
import amenity from "./slices/amenity";
import location from "./slices/location";
import reservartions from "./slices/reservations";
import profile from "./slices/profile";
import mybookings from "./slices/mybookings";
import slotmanagement from "./slices/slotmanagement";
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
  reservartions,
  profile,
  mybookings,
  slotmanagement,
});

export { rootPersistConfig, rootReducer };
