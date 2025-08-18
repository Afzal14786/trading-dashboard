import React, {useState} from 'react'
import {Link} from "react-router-dom"
import './style.css'

const DashboardNavbar = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleNavClick = (index) => {
    setSelectedMenu(index);
  }

  const activeClass = "selected";

  return (
    <>
      <div className='menu-navbar-container'>
        {/* mention logo here */}
        <Link to={'/'}>
          <img src="/kite-logo.svg" alt="dashboard logo" style={{height : "25px", width: "25px"}}/>
        </Link>

        <nav className='navbar'>
          <ul style={{listStyleType: "none"}}>
            <li>
              <Link to={'/'} 
                className={`nav-options ${selectedMenu === 0 ? activeClass : ''}`}
                onClick={()=> handleNavClick(0)}>
                Dashboard
              </Link>
            </li>

            <li>
              <Link to={'/orders'} 
                className={`nav-options ${selectedMenu === 1 ? activeClass : ''}`}
                onClick={()=> handleNavClick(1)}>
                Orders
              </Link>
            </li>

            <li>
              <Link to={'/holdings'} 
                className={`nav-options ${selectedMenu === 2 ? activeClass : ''}`}
                onClick={()=> handleNavClick(2)}
                >
                Holdings
              </Link>
            </li>

            <li>
              <Link to={'/positions'} 
                className={`nav-options ${selectedMenu === 3 ? activeClass : ''}`}
                onClick={()=> handleNavClick(3)}
                >
                Positions
              </Link>
            </li>

            <li>
              <Link to={'/funds'} 
                className={`nav-options ${selectedMenu === 5 ? activeClass : ''}`}
                onClick={()=> handleNavClick(5)}
                >
                Funds
              </Link>
            </li>
          </ul>
            {/* this div is for user profile */}
            <div className='user-profile profile'>
                <div className='avatar'></div>
                <span>CKV524</span>
            </div>
        </nav>
      </div>
    </>
  );
}

export default DashboardNavbar