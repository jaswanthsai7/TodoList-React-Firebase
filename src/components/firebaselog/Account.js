import React from "react";
import MainNavbar from "../navbar/MainNavbar";
import SideNavbar from "../navbar/SideNavbar";

export default function Account() {
  // const logOutHandler = async () => {
  //   try {
  //     await logout();
  //     navigate("/");
  //   } catch (e) {
  //     console.log(e.message);
  //   }
  // };

  // const addToCart = (item) => {
  //   setItemList(item);
  // };

  return (
    <div>
      <MainNavbar />
      <SideNavbar />
    </div>
  );
}
