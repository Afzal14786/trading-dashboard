import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.js";
import { toast } from "react-toastify";
import ResetFooter from "./ResetFooter.jsx";
import "./ResetPassword.css";

const ForgotUserId = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please provide your email address.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await api.post("/api/v1/user/forgot-userId", { email });
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("User ID recovery error:", error);
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
        <h2 className="title">Forgot your user ID?</h2>
        <p className="subtitle">We'll send your user ID to your email.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="E-mail (as on account)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="buttons-group">
            <button type="submit" className="continue-btn" disabled={isLoading}>
              {isLoading ? "Loading..." : "Continue"}
            </button>
            <Link to="/login" className="cancel-link">
              Cancel
            </Link>
          </div>
        </form>

        <div className="footer-links">
          <Link to="/reset-password">Forgot password?</Link>
        </div>
      </div>
      <ResetFooter />
    </div>
  );
};

export default ForgotUserId;