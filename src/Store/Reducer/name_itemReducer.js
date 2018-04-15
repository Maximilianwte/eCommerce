import { NAME_ITEMS } from "../Actions";

// Purchase_State is 0 if payment is not done, changes to 1 if payment is processed and details are ready to Database.
export default function(state = [
  {
    "id": "1",
    "name": "T-Shirt",
    "price": "18.99€",
    "image": "'../../Assets/StoreItems/1.jpg'",
    "description": "none"
  },
  {
    "id": "2",
    "name": "Jeans",
    "price": "29.99€",
    "image": "'../../Assets/StoreItems/2.jpg'",
    "description": "none"
  },
  {
    "id": "3",
    "name": "V-Neck",
    "price": "24.99€",
    "image": "'../../Assets/StoreItems/3.jpg'",
    "description": "none"
  }
    
  
], { type, payload }) {
  switch (type) {
    case NAME_ITEMS:
      return payload;
    default:
      return state;
  }
}
