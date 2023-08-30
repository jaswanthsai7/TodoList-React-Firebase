import React from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
export default function Cart(props) {
  const cartList = props.itemsList;
  console.log(cartList);
  // const addToCart=(item)=>{
  //     if(!cartList){
  // cartList.push(item)
  //     }
  // }
  const li = props.itemsList.map((item) => {
    return <CartItem item={item} />;
  });
  return <ul>{li === [] ? "" : li}</ul>;
}
