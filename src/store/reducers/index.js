import { combineReducers } from "redux";
import { productssReducer } from "./products";

export default combineReducers({
  allProducts: productssReducer
});