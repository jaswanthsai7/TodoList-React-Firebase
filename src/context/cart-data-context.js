import { createContext, useState } from "react";

import CartDatas from "./cart-con";

const CartDataProvider = (props) => {
  const [data, setData] = useState([]);

  const addData = (item) => {
    setData(item);
    console.log("Item addded to context ");
    console.log(data);
  };

  const cartDataContext = {
    items: data,
    addItems: addData,
  };
  return (
    <CartDatas.Provider value={cartDataContext}>
      {props.children}
    </CartDatas.Provider>
  );
};

export default CartDataProvider;
