import "./App.css";
import MainNavbar from "./components/navbar/MainNavbar";
import SideNavbar from "./components/navbar/SideNavbar";
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
      <MainNavbar />
      <SideNavbar />
      {/* <Routes>
<Route element={<}/>
      </Routes> */}
    </>
  );
}

export default App;
