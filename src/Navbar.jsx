import { NavLink } from "react-router-dom";

import "./App.css";

const Navbar = () => {
  return (
    <>
      <header className="w-100% shadow-md text-black p-2.5 flex justify-between align-center">
        {/* left header */}
        <div className="left-header flex justify-between align-center items-center border-r border-gray-500 text-sm">
          <div className="pinned instruments flex flex-wrap flex-row justify-between align-center items-center space-x-4 h-100% py-0 pl-5 pr-8">
            <div className="flex items-center space-x-1">
              <span>NIFTY 50</span>
              <span className="text-red-500 text-sm">24837.00</span>
              <span className="text-gray-600 text-xs">-225.10 (-0.90%)</span>
            </div>

            <div className="flex items-center space-x-1">
              <span>SENSEX</span>
              <span className="text-red-500 text-sm">81462.09</span>
              <span className="text-gray-600 text-xs">-721.08 (-0.88%)</span>
            </div>
          </div>
        </div>

        {/* right header */}
        <div className="right-header flex flex-1 justify-between items-center">
          {/* logo */}
          <div className="logo-section flex items-center pl-5">
            <NavLink to="/" className="flex items-center">
              <img
                src="/media/images/kite-logo.svg" // Placeholder for kite-logo.svg
                alt="kite logo"
                className="h-6 w-6"
              />
            </NavLink>
          </div>

          {/* navbar */}
          <nav className="flex flex-grow justify-center space-x-6 font-normal text-black text-sm">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/Order"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }
            >
              Orders
            </NavLink>

            <NavLink
              to="/Holdings"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }
            >
              Holdings
            </NavLink>

            <NavLink
              to="/Positions"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }
            >
              Positions
            </NavLink>

            <NavLink
              to="/Bids"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }
            >
              Bids
            </NavLink>

            <NavLink
              to="/Funds"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold"
                  : "hover:text-orange-500"
              }
            >
              Funds
            </NavLink>
          </nav>

          <div className="info-section flex items-center space-x-4">
            <span className="cursor-pointer">🛒</span> {/* Cart Icon */}
            <span className="cursor-pointer">🔔</span> {/* Notification Icon */}
            <div className="w-6 h-6 bg-purple-200 rounded-full flex items-center justify-center text-xs font-medium">
              MA
            </div>
            <span className="text-sm font-semibold">CKV524</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
