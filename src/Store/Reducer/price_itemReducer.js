import { PRICE_ITEMS } from "../Actions";

// Purchase_State is 0 if payment is not done, changes to 1 if payment is processed and details are ready to Database.
export default function(state = "0.00€", { type, payload }) {
  switch (type) {
    case PRICE_ITEMS:
      return payload;
    default:
      return state;
  }
}
