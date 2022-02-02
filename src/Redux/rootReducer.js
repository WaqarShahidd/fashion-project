import { combineReducers } from "redux";
import shopReducer from "./Shopping/shoppingReducers";

const rootReducer = combineReducers({
  shopReducer,
});

export default rootReducer;
