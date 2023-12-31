import React from "react";
import "./MainNavbar.css";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MainNavbar() {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const logOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <header className="main-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg main-nav px-0">
          <a className="navbar-brand" href="/mojo">
            <img src="" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mainMenu"
            aria-controls="mainMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar icon-bar-1" />
            <span className="icon-bar icon-bar-2" />
            <span className="icon-bar icon-bar-3" />
          </button>
          <div className="collapse navbar-collapse " id="mainMenu">
            <ul className="navbar-nav ml-auto text-uppercase f1">
              <li>
                <a href="#home" className="active active-first">
                  home
                </a>
              </li>
              <li>
                <a href="#about">about us</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <a onClick={logOut}>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* /.container */}
    </header>
  );
}
