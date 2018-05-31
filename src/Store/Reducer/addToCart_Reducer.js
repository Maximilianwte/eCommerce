import { ADD_CART } from "../Actions";

// Purchase_State is 0 if payment is not done, changes to 1 if payment is processed and details are ready to Database.
function addToCart_Reducer (state = 0, { type, payload }) {
  switch (type) {
    case ADD_CART:
      return payload;
    default:
      return state;
  }
}

export default addToCart_Reducer;
