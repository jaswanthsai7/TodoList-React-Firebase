import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../navbar/MainNavbar";
import SideNavbar from "../navbar/SideNavbar";
import Cart from "../cart/Cart";
import CartData from "../../context/cart-data-context";
import CartDataProvider from "../../context/cart-data-context";

export default function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  // const logOutHandler = async () => {
  //   try {
  //     await logout();
  //     navigate("/");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  const [itemList, setItemList] = useState([]);
  // const addToCart = (item) => {
  //   setItemList(item);
  // };

  return (
    <div>
      <MainNavbar />
      
        <SideNavbar  />
      
    </div>
  );
}
