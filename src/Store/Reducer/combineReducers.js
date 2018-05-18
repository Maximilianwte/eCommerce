import { combineReducers } from "redux";
import purchase_stateReducer from "./purchase_stateReducer";
import cart_countReducer from "./cart_countReducer";
import login_Reducer from "./login_Reducer";
import addToCart_Reducer from "./addToCart_Reducer";
import cart_itemsReducer from "./cart_itemsReducer";



const allReducers = combineReducers({
    Purchase_State: purchase_stateReducer,
    Cart_Count: cart_countReducer,
    AddToCart: addToCart_Reducer,
    Login_State: login_Reducer,
    Cart_Items: cart_itemsReducer,
});

export default allReducers ;