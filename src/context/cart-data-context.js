import { useReducer } from "react";

import CartDatas from "./cart-con";
const defaultCartState = {
  totalAmount: 0,
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //takes the initial item price and amount or quantity of item and calculate the total
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    // check if the same item is present in previous cart items
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // extract the item if found
    const existingCartItem = state.items[existingCartItemIndex];
    console.log(existingCartItem);
    console.log(state.items[existingCartItemIndex]);
    let updatedItems;
    // if its found execute true block else false block
    if (existingCartItem) {
      //spread the existing item and update the quantity or amount of the item
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      // update the item
      updatedItems[existingCartItemIndex] = updatedItem;
      console.log(updatedItems);
      console.log(updatedItems[existingCartItemIndex]);
    } else {
      //add new item to the list
      updatedItems = state.items.concat(action.item);
    }
    // return the updated items and the amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    //check the cart items and find the index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    // using index get the item
    const existingItem = state.items[existingCartItemIndex];
    // reduce the total price by using the removing item
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    // check the quantity of the item
    if (existingItem.amount === 1) {
      // if the quantity is 1 then remove the item
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      // if the quantity is > 1 then reduce the amount or quantity of the item
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      // update the item by using the index
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // return the updated items and total amount
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

const CartDataProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCart,
  };

  return (
    <CartDatas.Provider value={cartContext}>
      {props.children}
    </CartDatas.Provider>
  );
};

export default CartDataProvider;
