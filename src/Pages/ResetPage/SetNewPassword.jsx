import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/api.js";
import { toast } from "react-toastify";
import ResetFooter from "./ResetFooter.jsx";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

import "./ResetPassword.css";

const SetNewPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  useEffect(() => {
    // Verify token validity on component mount
  }, [token]);

  
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await api.post(`/user/reset-password/${token}`, { newPassword });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Password reset error:", error);
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="reset-container">
      <div className="reset-form-wrapper">
        <div className="logo-section">
          <img src="/kite-logo.svg" alt="Kite Logo" className="logo" />
        </div>
        <h2 className="title">Set a new password</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="input-group">
            <div className="password-input-wrapper">
              <input
                type={showNewPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input-field"
                required
              />
              <span onClick={toggleNewPasswordVisibility} className="password-toggle-icon">
                {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>
          </div>
          
          <div className="input-group">
            <div className="password-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input-field"
                required
              />
              <span onClick={toggleConfirmPasswordVisibility} className="password-toggle-icon">
                {showConfirmPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </span>
            </div>
          </div>
          <div className="buttons-group">
            <button type="submit" className="continue-btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Reset Password"}
            </button>
          </div>
        </form>
      </div>
      <ResetFooter />
    </div>
  );
};

export default SetNewPassword;