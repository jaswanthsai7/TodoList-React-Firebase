import "./App.css";
import MainNavbar from "./components/navbar/MainNavbar";
import SideNavbar from "./components/navbar/SideNavbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Account from "./components/firebaselog/Account";
import ProtectedRoutes from "./components/firebaselog/ProtectedRoutes";
import Login from "./components/firebaselog/Login";
import Register from "./components/firebaselog/Register";
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
