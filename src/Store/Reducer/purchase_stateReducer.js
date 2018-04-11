import { PURCHASE_STATE } from "../Actions";

// Purchase_State is 0 if payment is not done, changes to 1 if payment is processed and details are ready to Database.
export default function(state = 0, { type, payload }) {
  switch (type) {
    case PURCHASE_STATE:
      return payload;
    default:
      return state;
  }
}
