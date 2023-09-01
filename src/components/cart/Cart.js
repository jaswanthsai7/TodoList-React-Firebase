import React, { useContext } from "react";
import classes from "./Cart.module.css";
import CartDatas from "../../context/cart-con";
import CartItem from "./CartItem";
import BackModal from "../modal/BackModal";
export default function Cart(props) {
  //   const cartList = props.itemsList;
  // console.log(props.itemsList)
  const usein = useContext(CartDatas);
  // console.log("rebtkjsdbfakj")

  // console.log(usein)

  // const show=()=>{
  //     console.log(usein.items)
  // }
  const cartCtx = useContext(CartDatas);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  let listsData = usein.items;
  // console.log(listsData)
  // useEffect(() => {
  //   listsData = usein.items;
  //   // setStat(usein.items)
  //   console.log(listsData);
  //   console.log("listsData");
  // }, [usein]);

  const cartData = (
    <ul className={classes["cart-items"]}>
      {listsData.map((item, i) => {
        console.log("Try to render this CArt");
        console.log(item);
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  return (
    <BackModal>
      <div className={classes.div}>{cartData}</div>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
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
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </BackModal>
  );
}
