import React from "react";
import classes from "./CartItem.module.css";
export default function CartItem(props) {
//   const price = `$${props.item.price.toFixed(2)}`;

//   console.log(props.item)
  return (
  <div key={props.item.id}>{props.item.name}</div>

  );
}
  // <li className={classes["cart-item"]}>
  //   <div>
  //     <h2>{props.item.name}</h2>
  //     <div className={classes.summary}>
  //       <span className={classes.price}>{price}</span>
  //       <span className={classes.amount}>x {props.item.amount}</span>
  //     </div>
  //   </div>
  //   <div className={classes.actions}>
  //     <button >−</button>
  //     <button >+</button>
  //   </div>
  // </li>
