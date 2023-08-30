import "./App.css";
import MainNavbar from "./components/navbar/MainNavbar";
import SideNavbar from "./components/navbar/SideNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Account from "./components/firebaselog/Account";
import ProtectedRoutes from "./components/firebaselog/ProtectedRoutes";
import Login from "./components/firebaselog/Login";
import Register from "./components/firebaselog/Register";
import AuthContext from "./context/AuthContext";
import CartDataProvider from "./context/cart-data-context";

function App() {
  return (


    <>
    <CartDataProvider>
      <AuthContext>
     
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Register/>} />
            <Route
              path="/account"
              element={
                <ProtectedRoutes>
                   <Account/>
                </ProtectedRoutes>
              }
            />
          </Routes>
        </Router>
        </AuthContext>
    </CartDataProvider></>
  );
}

export default App;
