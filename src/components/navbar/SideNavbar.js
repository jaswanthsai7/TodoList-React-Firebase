import React, { useEffect, useReducer, useState } from "react";
import "./SideNavbar.css";
import $ from "jquery";
import AddToList from "../todolist/AddToList";
import BackModal from "../modal/BackModal";
import TodoList from "../todolist/TodoList";
import { UserAuth } from "../../context/AuthContext";
import ItemsList from "../Item/ItemsList";
import Cart from "../cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const handler = (state, action) => {
  if (action.type === "ADD_TODO") {
    return { showForm: !state.showForm };
  }
  if (action.type === "SHOW_CART") {
    return { showCart: !state.showCart };
  }
  if (action.type === "SHOW_SERVICE") {
    return { showService: !state.showService };
  }
};

export default function SideNavbar(props) {
  const { user } = UserAuth();
  const [state, dispatch] = useReducer(handler, {
    showForm: false,
    showCart: false,
    showService: false,
  });
  const [list, setList] = useState([]);
  // const [service, setService] = useState(false);
  const [form, setForm] = useState(false);
  const [deletedId, setDeletedId] = useState(null);
  const enco = user.email;
  const withoutDotCom = enco.replace(/\.com$/, "");

  useEffect(() => {
    initialLoad();
  }, [deletedId]);

  function closeForm() {
    // dispatch({ type: "ADD_TODO" });
    if (form === false) {
      setForm(true);
    } else if (form === true) {
      setForm(false);
    }
  }

  async function addToList(data) {
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
    initialLoad();
    // setList((prev) => {
    //   return [...prev, data];
    // });
    dispatch({ type: "ADD_TODO" });
  }

  const sortList = (event) => {
    if (event.target.value === "High") {
      const priorityValues = {
        Low: 3,
        Medium: 2,
        High: 1,
      };

      const data = [...list];
      data.sort(
        (a, b) => priorityValues[a.priority] - priorityValues[b.priority]
      );
      console.log(data);
      setList(data);
    } else if (event.target.value === "Low") {
      const priorityValues = {
        Low: 1,
        Medium: 2,
        High: 3,
      };

      const data = [...list];
      data.sort(
        (a, b) => priorityValues[a.priority] - priorityValues[b.priority]
      );
      console.log(data);
      setList(data);
    }
  };

  const initialLoad = async () => {
    try {
      const response = await fetch(
        `https://todolist-auth-39f0d-default-rtdb.firebaseio.com/${withoutDotCom}.json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      if (data !== null) {
        const dataLoad = Object.keys(data).map((key) => {
          return { id: key, ...data[key] };
        });
        setList(dataLoad);
      } else {
        setList([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const deletePost = async (id) => {
    try {
      await fetch(
        `https://todolist-auth-39f0d-default-rtdb.firebaseio.com/${withoutDotCom}/${id}.json`,
        { method: "DELETE" }
      );
      console.log("in del post");
      console.log(id);
      // initialLoad();
      setDeletedId(id);
      // Use the callback function of setState to ensure immediate refresh
      // setList((prevList) => {
      //   const updatedList = prevList.filter((post) => post.id !== id);
      //   return updatedList;
      // });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const changeService = () => {
    // if (service === false) {
    //   setService(false);
    // } else if (service === true) {
    //   setService(false);
    // }
    dispatch({ type: "SHOW_SERVICE" });
  };

  const showCart = () => {
    dispatch({ type: "SHOW_CART" });
  };

  // const addedToast = () => {
  //   content = (
  //     <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
  //       <div class="toast-body">Hello, world! This is a toast message.</div>
  //     </div>
  //   );

  //   const timer = setTimeout(() => {
  //     content = "";
  //   }, 2000);
  //   clearTimeout(timer);
  // };

  function clickHandler() {
    $(function () {
      // Sidebar toggle behavior
      $("#sidebarCollapse").on("click", function () {
        $("#sidebar, #content").toggleClass("active");
      });
    });
  }

  // const addToCarts = (item) => {
  //   props.addToCartss(item)
  // };

  return (
    <>
      {/* Vertical navbar */}
      <div className="vertical-nav bg-white" id="sidebar">
        <div className="py-4 px-3 mb-4 bg-light">
          <div className="media d-flex align-items-center">
            <img
              src="https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"
              alt="..."
              width={65}
              className="mr-3 rounded-circle img-thumbnail shadow-sm"
            />
            <div className="media-body">
              <h4 className="m-0">{user.email}</h4>
              <p className="font-weight-light text-muted mb-0">Welcome!</p>
            </div>
          </div>
        </div>
        <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">
          Main
        </p>
        <ul className="nav flex-column bg-white mb-0">
          {/* <li className="nav-item">
            <a href="#" className="nav-link text-dark font-italic bg-light">
              <i className="fa fa-th-large mr-3 text-primary fa-fw" />
              Home
            </a>
          </li> */}
          <li className="nav-item" onClick={closeForm}>
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-address-card mr-3 text-primary fa-fw" />
              Add TODO
            </a>
          </li>
          <li className="nav-item" onClick={changeService}>
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-cubes mr-3 text-primary fa-fw" />
              Services
            </a>
          </li>
          <li className="nav-item" onClick={showCart}>
            <a href="#" className="nav-link text-dark font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" />
              Cart
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

        {state.showService && <ItemsList />}
        <ToastContainer />
        {!state.showCart && !state.showService && (
          <>
            <h2 className="display-4 text-white">List</h2>
            <select
              className="custom-select col-md-3 "
              id="priority"
              required
              onChange={sortList}
            >
              <option value="Sort" disabled>
                Sort....
              </option>
              <option value="High">High to Low</option>
              <option value="Low">Low to High</option>
            </select>

            {list !== [] ? (
              <TodoList todoList={list} deletePost={deletePost} />
            ) : (
              <p>No Data Found....</p>
            )}
          </>
        )}
        {form && (
          <BackModal>
            <AddToList closeForm={closeForm} addToList={addToList} />
          </BackModal>
        )}
        {state.showCart && <Cart hideCart={showCart} />}
      </div>
    </>
  );
}
