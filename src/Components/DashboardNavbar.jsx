import { useState } from "react";
import { Link } from "react-router-dom";
import {PersonAddAlt, Logout} from "@mui/icons-material"
import PaidIcon from '@mui/icons-material/Paid';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupportIcon from '@mui/icons-material/Support';

import "./style.css";

const DashboardNavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleNavClick = (index) => {
    setSelectedMenu(index);
  };

  const activeClass = "selected";

  const [selectProfile, setSelectedProfile] = useState(false);

  const handleProfile = () => {
    setSelectedProfile(!selectProfile);
  };

  return (
    <>
      <div className="menu-navbar-container">
        {/* mention logo here */}
        <Link to={"/"}>
          <img
            src="/kite-logo.svg"
            alt="dashboard logo"
            style={{ height: "25px", width: "25px" }}
          />
        </Link>

        <nav className="navbar">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                to={"/"}
                className={`nav-options ${
                  selectedMenu === 0 ? activeClass : ""
                }`}
                onClick={() => handleNavClick(0)}
              >
                Dashboard
              </Link>
            </li>

            <li>
              <Link
                to={"/orders"}
                className={`nav-options ${
                  selectedMenu === 1 ? activeClass : ""
                }`}
                onClick={() => handleNavClick(1)}
              >
                Orders
              </Link>
            </li>

            <li>
              <Link
                to={"/holdings"}
                className={`nav-options ${
                  selectedMenu === 2 ? activeClass : ""
                }`}
                onClick={() => handleNavClick(2)}
              >
                Holdings
              </Link>
            </li>

            <li>
              <Link
                to={"/positions"}
                className={`nav-options ${
                  selectedMenu === 3 ? activeClass : ""
                }`}
                onClick={() => handleNavClick(3)}
              >
                Positions
              </Link>
            </li>

            <li>
              <Link
                to={"/funds"}
                className={`nav-options ${
                  selectedMenu === 5 ? activeClass : ""
                }`}
                onClick={() => handleNavClick(5)}
              >
                Funds
              </Link>
            </li>
          </ul>
          {/* this div is for user profile */}
          <div className="profile-container">
            <div className="user-profile" onClick={handleProfile}>
              <div className="avatar"></div>
              <span>CKV524</span>
            </div>

            {/* START OF UPDATED DROPDOWN JSX */}
            {selectProfile && (
              <div className="dropdown-menu">
                {" "}
                {/* Make sure class is dropdown-menu */}
                <div className="dropdown-header">
                  <div className="user-info">
                    <h4>Md Afjal Ansari</h4>
                    <p>mdafzal14777@gmail.com</p>
                  </div>
                  <EditIcon size={18} className="edit-icon" />
                </div>
                <div className="dropdown-section">
                  <div className="privacy-mode">
                    <span>Privacy mode</span>
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="dropdown-section">
                  <ul className="dropdown-links">
                    <li>
                      <Link to="/console">
                        <DonutLargeIcon size={20} /> Console
                      </Link>
                    </li>
                    <li>
                      <Link to="/coin">
                        <PaidIcon size={20} /> Coin
                      </Link>
                    </li>
                    <li>
                      <Link to="/support">
                        <SupportIcon size={20} /> Support
                      </Link>
                    </li>
                    <li>
                      <Link to="/invite">
                        <PersonAddIcon size={20} /> Invite friends
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <ul className="dropdown-links">
                    <li>
                      <Link to="/shortcuts">
                        <KeyboardCommandKeyIcon size={20} /> Keyboard shortcuts
                      </Link>
                    </li>
                    <li>
                      <Link to="/manual">
                        <PersonAddAlt size={20} /> User manual
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown-section">
                  <ul className="dropdown-links">
                    <li>
                      <Link to="/logout">
                        <Logout size={20} /> Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* END OF UPDATED DROPDOWN JSX */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default DashboardNavbar;
