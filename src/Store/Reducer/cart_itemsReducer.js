import { CART_ITEMS } from "../Actions";

// The first column is the item, the second the amount and the third the price of the amount*item
export default function(state = [], { type, payload }) {
  switch (type) {
    case CART_ITEMS:
      return {
        ...state, payload
      };
    default:
      return state;
  }
}