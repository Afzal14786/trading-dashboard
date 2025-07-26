import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeNav = "text-orange-500 font-semibold";
  const notActive = "hover:text-orange-500";
  return (
    <>
      <header className="w-full shadow-md text-black p-2.5 flex justify-between items-center text-sm">
        {/* Left Header: Market Data */}
        <div className="flex items-center border-r border-gray-300 pr-4">
          <div className="flex items-center space-x-4 py-0 pl-4 pr-4">
            {/* NIFTY 50 */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">NIFTY 50</span>
              <span className="text-green-500 font-medium">24837.00</span>
              <span className="text-gray-500 text-xs">225.10 (+0.90%)</span>
            </div>

            {/* SENSEX */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-600">SENSEX</span>
              <span className="text-green-500 font-medium">81462.09</span>
              <span className="text-gray-500 text-xs">721.08 (+0.88%)</span>
            </div>
          </div>
        </div>

        {/* logo is seperated */}
        <div className="flex flex-1 items-center justify-between pl-4">
          {/* logo should be in the left of the right header */}
          <NavLink to="/">
            <img src="/media/images/kite-logo.svg" alt="kite-logo" className="h-7 w-7"/>
          </NavLink>

          {/* Item 2: Group of Nav + User Info (pushed to the right) */}
          <div className="flex items-center">
            {/* Navbar Links */}
            <nav className="flex items-center space-x-6 text-gray-600 mr-5">
              <NavLink to="/" end className={({ isActive }) => isActive ? activeNav : notActive}>
                Dashboard
              </NavLink>
              <NavLink to="/orders" className={({ isActive }) => isActive ? activeNav : notActive}>
                Orders
              </NavLink>
              <NavLink to="/holdings" className={({ isActive }) => isActive ? activeNav : notActive}>
                Holdings
              </NavLink>
              <NavLink to="/positions" className={({ isActive }) => isActive ? activeNav : notActive}>
                Positions
              </NavLink>
              <NavLink to="/bids" className={({ isActive }) => isActive ? activeNav : notActive}>
                Bids
              </NavLink>
              <NavLink to="/funds" className={({ isActive }) => isActive ? activeNav : notActive}>
                Funds
              </NavLink>
            </nav>

            {/* User Info & Actions */}
            <div className="flex items-center space-x-5 pl-8 pr-4 text-gray-600 border-l border-gray-500">
              {/* Cart Icon */}
              <button className="hover:text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </button>
              {/* Notification Icon */}
              <button className="hover:text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </button>
              {/* User Profile */}
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-xs font-medium text-blue-600">
                  CK
                </div>
                <span className="font-semibold text-gray-700">CKV524</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;