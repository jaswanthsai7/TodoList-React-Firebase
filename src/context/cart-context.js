import { useReducer } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
const defaultCartState = {
  totalAmount: 0,
  items: [],
};
const cartReducer = (state, action) => {
  if (action.type == "ADD") {
  }
  if (action.type == "REMOVE") {
  }
};

const CartProvider = (props) => {
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
    <CartContext.Provider value={cartContext}>
      {props.childern}
    </CartContext.Provider>
  );
};

export default CartProvider;
