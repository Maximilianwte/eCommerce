import { combineReducers } from "redux";
import purchase_stateReducer from "./purchase_stateReducer";
import cart_itemReducer from "./cart_itemReducer";
import name_itemReducer from "./name_itemReducer";




const allReducers = combineReducers({
    Purchase_State: purchase_stateReducer,
    Cart_Items: cart_itemReducer,
    Name_Items: name_itemReducer,
});

export default allReducers ;