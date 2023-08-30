import React, { useContext, useEffect, useState } from "react";
import classes from "./Cart.module.css";
import Item from "./Item";
import CartDatas from "../../context/cart-con";
export default function Cart(props) {
//   const cartList = props.itemsList;
// console.log(props.itemsList)
const [stat,setStat]=useState([])
const usein=useContext(CartDatas);
// console.log("rebtkjsdbfakj")

// console.log(usein)

// const show=()=>{
//     console.log(usein.items)
// }

let listsData=usein.items;
// console.log(listsData)
useEffect(()=>{
    listsData=usein.items;
    // setStat(usein.items)
    console.log(listsData)
    console.log("listsData")
},[usein])

  return (
    <ul>
      {listsData.map((item,i) => {

        console.log("Try to render this CArt");
        console.log(item);
       return <Item key={item.id+i} data={"ok"}/>
      }
      )}
    </ul>
  );
}
