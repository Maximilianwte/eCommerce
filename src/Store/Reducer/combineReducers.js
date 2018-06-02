import { combineReducers } from "redux";
import cartCount_Reducer from "./cartCount_Reducer";
import login_Reducer from "./login_Reducer";
import cartItems_Reducer from "./cartItems_Reducer";



const allReducers = combineReducers({
    Cart_Count: cartCount_Reducer,
    Login_State: login_Reducer,
    Cart_Items: cartItems_Reducer,
});

export default allReducers ;