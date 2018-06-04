import { LOGIN_REDUCER } from "../Actions";

// 0 indicates that user is not logged in. Otherwise here will be the user id stored while active.
export default function(state = "0025ae99da73489ed04f10bb3853", { type, payload }) {
  switch (type) {
    case LOGIN_REDUCER:
      return payload;
    default:
      return state;
  }
}
