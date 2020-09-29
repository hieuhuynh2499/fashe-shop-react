import AddToCart from "./AddToCart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addtocart: AddToCart
});

export default rootReducer;