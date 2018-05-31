import { CART_COUNT } from "../Actions";


// Purchase_State is 0 if payment is not done, changes to 1 if payment is processed and details are ready to Database.
export default function cart_countReducer (state = 2, { type, payload }) {
  switch (type) {
    case CART_COUNT:
      return payload;
    default:
      return state;
  }
}


