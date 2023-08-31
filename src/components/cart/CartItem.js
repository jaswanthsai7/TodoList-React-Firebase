import React from "react";
import classes from "./CartItem.module.css";
export default function CartItem(props) {
    const price = `$${props.items.price.toFixed(2)}`;

  //   console.log(props.item)
  return(<li className={classes["cart-item"]}>
    <div>
      <h2>{props.items.name}</h2>
      <div className={classes.summary}>
        <span className={classes.price}>{price}</span>
        <span className={classes.amount}>x {props.items.price}</span>
      </div>
    </div>
    <div className={classes.actions}>
      <button >−</button>
      <button >+</button>
    </div>
  </li>)
}
