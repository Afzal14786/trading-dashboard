import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../api/api";

import { PersonAddAlt, Logout } from "@mui/icons-material";
import PaidIcon from "@mui/icons-material/Paid";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SupportIcon from "@mui/icons-material/Support";

import "./style.css";

const DashboardNavbar = () => {
  const [selectProfile, setSelectProfile] = useState(false);
  const [user, setUser] = useState(null);

  const dropdownRef = useRef(null);
  const location = useLocation(); // Get the current location object
  const navigate = useNavigate();

  const handleProfile = () => {
    setSelectProfile((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSelectProfile(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectProfile(false);
  }, [location]);

  // Handle logout
  const handleLogout = async () => {
    try {
      await api.post("/user/logout");
      toast.success("Logged out successfully!");
    } catch (err) {
      toast.error("Logout failed on the server.");
      console.error("Logout API Error:", err);
    } finally {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      navigate("/login");
    }
  };

  // Fetching the user data
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        return;
      }
      
      try {
        const response = await api.get("/user/profile");
        setUser(response.data.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        const status = err?.response?.status;

        if (status === 404 || status === 401) {
          toast.error("Session expired. Please log in again.");
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          navigate("/login");
        } else {
          toast.error("Failed to load user profile.");
        }
      }
    };
    fetchUser();
  }, []);

  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="menu-navbar-container">
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
              className={`nav-options ${isLinkActive("/") ? "selected" : ""}`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to={"/orders"}
              className={`nav-options ${isLinkActive("/orders") ? "selected" : ""}`}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to={"/holdings"}
              className={`nav-options ${isLinkActive("/holdings") ? "selected" : ""}`}
            >
              Holdings
            </Link>
          </li>
          <li>
            <Link
              to={"/positions"}
              className={`nav-options ${isLinkActive("/positions") ? "selected" : ""}`}
            >
              Positions
            </Link>
          </li>
          <li>
            <Link
              to={"/funds"}
              className={`nav-options ${isLinkActive("/funds") ? "selected" : ""}`}
            >
              Funds
            </Link>
          </li>
        </ul>

        <div className="profile-wrapper" ref={dropdownRef}>
          <div className="user-profile" onClick={handleProfile}>
            <div className="avatar">
              <img src={user?.profile || "user.png"} alt="profile_image" />
            </div>
            <span>{user?.userId || "UserId"}</span>
          </div>

          {selectProfile && user && (
            <div className="dropdown_navbar_container">
              <div className="dropdown_header">
                <div className="user_information">
                  <Link to={"/profile"}>
                    <span className="user_name">{user?.name}</span>
                    <span className="user_email">{user?.email}</span>
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
              <div className="logout" onClick={handleLogout}>
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