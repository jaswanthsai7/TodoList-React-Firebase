import React from "react";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../navbar/MainNavbar";
import SideNavbar from "../navbar/SideNavbar";

export default function Account() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const logOutHandler = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
      <MainNavbar />
      <SideNavbar />
    </div>
  );
}
