import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { productssReducer } from "./products";

export default combineReducers({
  allProducts: productssReducer,
  cartProducts: cartReducer,
});