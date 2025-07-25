import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard/Dashboard";
import Order from "./pages/Orders/Order";
import Holding from "./pages/Holdings/Holding";
import Positions from "./pages/Positions/Positions";
import Funds from "./pages/Funds/Funds";
import AppPage from "./pages/Apps/AppPage";

import Sidebar from "./sub-components/AsideBar/Sidebar";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route element={<Dashboard/>} path='/'/>
          <Route element={<Order/>} path='/order'/>
          <Route element={<Holding/>} path='/holdings'/>
          <Route element={<Positions/>} path='/position'/>
          <Route element={<Funds/>} path='/funds'/>
          <Route element={<AppPage/>} path='/app'/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
