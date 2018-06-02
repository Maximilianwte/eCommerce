// Action Creator Store
export const CART_COUNT = "CART_COUNT:number";

export function cart_count(i) {
  return {
    type: CART_COUNT,
    payload: i
  };
}

// Action Creator Store
export const CART_ITEMS = "CART_ITEMS:number";

export function cart_items(i) {
  return {
    type: CART_ITEMS,
    id: i[0],
    amount: i[1],
    price: i[2]
  };
}

// Action Creator Store
export const LOGIN_REDUCER = "LOGIN_STATE:number";

export function login_state(i) {
  return {
    type: LOGIN_REDUCER,
    payload: i
  };
}

