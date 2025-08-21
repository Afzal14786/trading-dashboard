import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import NeftyFiftyBar from "./NeftyFiftyBar";

import './style.css'

const MainLayout = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
