import React, { createContext } from "react";
const CartDatas= React.createContext({
    items: [],
    addItems: (item) => {},
  });
  export default CartDatas;