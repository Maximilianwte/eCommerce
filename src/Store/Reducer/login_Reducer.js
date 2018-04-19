import { LOGIN_REDUCER } from "../Actions";

// 0 indicates that user is not logged in. 1 => User is logged in.
export default function(state = 0, { type, payload }) {
  switch (type) {
    case LOGIN_REDUCER:
      return payload;
    default:
      return state;
  }
}
