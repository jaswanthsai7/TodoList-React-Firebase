import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Item from "./Item";
import CartDatas from "../../context/cart-con";
import CartItem from "./CartItem";
import BackModal from "../modal/BackModal";
export default function Cart(props) {
  //   const cartList = props.itemsList;
  // console.log(props.itemsList)
  const [stat, setStat] = useState([]);
  const usein = useContext(CartDatas);
  // console.log("rebtkjsdbfakj")

  // console.log(usein)

  // const show=()=>{
  //     console.log(usein.items)
  // }

  let listsData = usein.items;
  // console.log(listsData)
  useEffect(() => {
    listsData = usein.items;
    // setStat(usein.items)
    console.log(listsData);
    console.log("listsData");
  }, [usein]);

  const cartData = (
    <ul className={classes["cart-items"]}>
      {listsData.map((item, i) => {
        console.log("Try to render this CArt");
        console.log(item);
        return <CartItem key={item.id + i} items={item} />;
      })}
    </ul>
  );

  return (
    <BackModal>
      <div className={classes.div}>{cartData}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        {/* <span>{totalAmount}</span> */}
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={() => {
            props.hideCart();
          }}
        >
          Close
        </button>
        {<button className={classes.button}>Order</button>}
      </div>
    </BackModal>
  );
}
