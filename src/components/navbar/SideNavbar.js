import React, { useReducer, useState } from "react";
import "./SideNavbar.css";
import $ from "jquery";
import AddToList from "../todolist/AddToList";
import BackModal from "../modal/BackModal";
import TodoList from "../todolist/TodoList";
import { json } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
const handler = (state, action) => {
  if (action.type == "ADD_TODO") {
    return { showForm: !state.showForm };
  }
};

export default function SideNavbar(props) {
  const { user } = UserAuth();
  const [state, dispatch] = useReducer(handler, { showForm: false });
  const [list, setList] = useState([]);
  function closeForm() {
    dispatch({ type: "ADD_TODO" });
  }
  async function addToList(data) {
    const enco = user.email;
    const withoutDotCom = enco.replace(/\.com$/, "");
    await fetch(
      `https://todolist-auth-39f0d-default-rtdb.firebaseio.com/${withoutDotCom}.json`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).catch((error) => console.log(error));

    setList((prev) => {
      return [...prev, data];
    });
    dispatch({ type: "ADD_TODO" });
  }

  function clickHandler() {
    $(function () {
      // Sidebar toggle behavior
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar, #content").toggleClass("active");
      });
    });
  }
  return (
    <>
      {/* Vertical navbar */}
      <div className="vertical-nav bg-white" id="sidebar">
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            <img
              src="https://bootstrapious.com/i/snippets/sn-v-nav/avatar.png"
              alt="..."
              width={65}
              className="mr-3 rounded-circle img-thumbnail shadow-sm"
            />
            <div className="media-body">
              <h4 className="m-0">Jason Doe</h4>
              <p className="font-weight-light text-muted mb-0">Web developer</p>
            </div>
          </div>
        </div>
        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
          Main
        </p>
        <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic bg-light">
              <i className="fa fa-th-large mr-3 text-primary fa-fw" />
              Home
            </a>
          </li>
          <li className="nav-item" onClick={closeForm}>
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-address-card mr-3 text-primary fa-fw" />
              Add TODO
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-cubes mr-3 text-primary fa-fw" />
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" />
              Gallery
            </a>
          </li>
        </ul>
        <p className="text-gray font-weight-bold text-uppercase px-3 small py-4 mb-0">
          Charts
        </p>
        {/* <ul className="nav flex-column bg-white mb-0">
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-area-chart mr-3 text-primary fa-fw" />
              Area charts
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-bar-chart mr-3 text-primary fa-fw" />
              Bar charts
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-pie-chart mr-3 text-primary fa-fw" />
              Pie charts
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-line-chart mr-3 text-primary fa-fw" />
              Line charts
            </a>
          </li>
        </ul> */}
      </div>
      {/* End vertical navbar */}
      {/* Page content holder */}
      <div className="page-content p-5" id="content">
        {/* Toggle button */}
        <br />
        <br />
        <button
          id="sidebarCollapse"
          type="button"
          className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"
          onClick={clickHandler}
        >
          <i className="fa fa-bars mr-2" />
          <small className="text-uppercase font-weight-bold">Toggle</small>
        </button>
        {/* Demo content */}
        <h2 className="display-4 text-white">List</h2>

        {state.showForm && (
          <BackModal>
            <AddToList closeForm={closeForm} addToList={addToList} />
          </BackModal>
        )}

        <TodoList todoList={list} />
      </div>
    </>
  );
}
