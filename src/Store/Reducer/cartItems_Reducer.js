import { CART_ITEMS } from "../Actions";

// The first column is the item, the second the amount and the third the price of the amount*item
export default function(state = {Id: [], Amount: [], Price: []}, { type, id, amount, price }) {
  switch (type) {
    case CART_ITEMS:
      return {
        ...state,
        Id: [...state.Id, id],
        Amount: [...state.Amount, amount],
        Price: [...state.Price, price]
      };
    default:
      return state;
  }
}
