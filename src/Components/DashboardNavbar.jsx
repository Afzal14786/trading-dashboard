import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { PersonAddAlt, Logout } from "@mui/icons-material";
import PaidIcon from "@mui/icons-material/Paid";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SupportIcon from "@mui/icons-material/Support";

import "./style.css";

const DashboardNavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [selectProfile, setSelectProfile] = useState(false);

  const dropdownRef = useRef(null);
  const location = useLocation();

  const handleNavClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfile = () => {
    setSelectProfile((prev) => !prev);
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelectProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ✅ Close dropdown on route change
  useEffect(() => {
    setSelectProfile(false);
  }, [location]);

  const activeClass = "selected";

  return (
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
              className={`nav-options ${selectedMenu === 0 ? activeClass : ""}`}
              onClick={() => handleNavClick(0)}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to={"/orders"}
              className={`nav-options ${selectedMenu === 1 ? activeClass : ""}`}
              onClick={() => handleNavClick(1)}
            >
              Orders
            </Link>
          </li>

          <li>
            <Link
              to={"/holdings"}
              className={`nav-options ${selectedMenu === 2 ? activeClass : ""}`}
              onClick={() => handleNavClick(2)}
            >
              Holdings
            </Link>
          </li>

          <li>
            <Link
              to={"/positions"}
              className={`nav-options ${selectedMenu === 3 ? activeClass : ""}`}
              onClick={() => handleNavClick(3)}
            >
              Positions
            </Link>
          </li>

          <li>
            <Link
              to={"/funds"}
              className={`nav-options ${selectedMenu === 5 ? activeClass : ""}`}
              onClick={() => handleNavClick(5)}
            >
              Funds
            </Link>
          </li>
        </ul>

        {/* ✅ Wrapper ref here */}
        <div className="profile-wrapper" ref={dropdownRef}>
          <div className="user-profile" onClick={handleProfile}>
            <div className="avatar">
              <img src="/images/profile_test.jpg" alt="profile_image" />
            </div>
            <span>CKV524</span>
          </div>

          {selectProfile && (
            <div className="dropdown_navbar_container">
              <div className="dropdown_header">
                <div className="user_information">
                  <Link to={"/profile"}>
                    <span className="user_name">Md Afzal Ansari</span>
                    <span className="user_email">mdafzal14777@gmail.com</span>
                  </Link>

                  <Link to={"/update_profile"}>
                    <div className="edit_icon">
                      <EditIcon />
                    </div>
                  </Link>
                </div>

                <hr />

                <div className="privacy-mode">
                  <span>Privacy mode</span>
                  <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>

              <hr />

              <div className="dropdown_options">
                <Link to={""}>
                  <DonutLargeIcon /> <span>Console</span>
                </Link>

                <Link to={""}>
                  <PaidIcon /> <span>Icon</span>
                </Link>

                <Link to={"/"}>
                  <SupportIcon /> <span>Support</span>
                </Link>

                <Link to={"/"}>
                  <PersonAddIcon /> <span>Icon</span>
                </Link>
              </div>

              <hr />

              <div className="support_links">
                <Link to={"/support"}>
                  <KeyboardCommandKeyIcon />
                  <span>Keyboard Shortcuts</span>
                </Link>

                <Link to={"/"}>
                  <PersonAddAlt />
                  <span>User Manual</span>
                </Link>
              </div>

              <hr />

              <div className="logout">
                <Logout /> <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
