// Action Creator Store
export const PURCHASE_STATE = "purchase_state:number";

export function purchase_state(i) {
  return {
    type: PURCHASE_STATE,
    payload: i
  };
}

// Action Creator Store
export const CART_ITEMS = "CART_ITEMS:number";

export function cart_items(i) {
  return {
    type: CART_ITEMS,
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

// Action Creator Store
export const ITEM_IMAGES = "ITEM_IMAGES:number";

export function item_images(i) {
  return {
    type: ITEM_IMAGES,
    payload: i
  };
}

