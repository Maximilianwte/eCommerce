// Action Creator Store
export const PURCHASE_STATE = "purchase_state:number";

export function purchase_state(i) {
  return {
    type: PURCHASE_STATE,
    payload: i
  };
}

// Action Creator Store
export const CARD_ITEMS = "CARD_ITEMS:number";

export function card_items(i) {
  return {
    type: CARD_ITEMS,
    payload: i
  };
}

// Action Creator Store
export const PRICE_ITEMS = "PRICE_ITEMS:number";

export function price_items(i) {
  return {
    type: PRICE_ITEMS,
    payload: i
  };
}

// Action Creator Store
export const NAME_ITEMS = "NAME_ITEMS:number";

export function name_items(i) {
  return {
    type: NAME_ITEMS,
    payload: i
  };
}
