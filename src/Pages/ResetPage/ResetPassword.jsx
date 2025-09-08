import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api/api.js"
import { toast } from "react-toastify";
import "./ResetPassword.css";

const ResetPassword = () => {
  const [rememberUserId, setRememberUserId] = useState(true);
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = rememberUserId
      ? "/user/forgot-password"
      : "/user/forgot-userId";

    const payload = rememberUserId ? { userId, email } : { email };

    if (!email || (rememberUserId && !userId)) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    setIsLoading(true);

    try {
      const res = await api.post(endpoint, payload);

      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error("Recovery error:", error);
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
        <h2 className="title">Forgot user ID or password?</h2>

        <form onSubmit={handleSubmit}>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="user-id-status"
                value="remember"
                checked={rememberUserId}
                onChange={() => setRememberUserId(true)}
              />
              I remember my user ID
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="user-id-status"
                value="forgot"
                checked={!rememberUserId}
                onChange={() => setRememberUserId(false)}
              />
              I forgot my user ID
            </label>
          </div>

          {rememberUserId && (
            <div className="input-group">
              <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="input-field"
              />
            </div>
          )}

          <div className="input-group">
            <input
              type="email"
              placeholder="E-mail (as on account)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
          </div>

          <div className="buttons-group">
            <button
              type="submit"
              className="continue-btn"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Continue"}
            </button>
            <Link to="/login" className="cancel-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>

      {/* HIGHLIGHT: Update the footer with the new, unique class names */}
      <footer className="reset_footer_new">
        <div className="reset_footer_apps">
          <img src="/images/playstore.svg" alt="play store" className="reset_footer_icon" />
          <img src="/images/app_store.svg" alt="apple logo" className="reset_footer_icon" />
        </div>

        <div className="reset_footer_zerodha_logo">
          <img src="/images/zerodha-logo.svg" alt="zerodha logo" className="reset_footer_logo" />
        </div>

        <div className="reset_footer_signup_link">
          <Link to="/signup" className="reset_footer_link">
            Don&apos;t have an account? Signup now!
          </Link>
        </div>

        <div className="reset_footer_legal">
          <p>
            Zerodha Broking Limited: Member of <Link to="#">NSE</Link>,{" "}
            <Link to="#">BSE</Link> – SEBI Reg. no. INZ000031633,{" "}
            <Link to="#">CDSL</Link> – <Link to="#">SEBI</Link> Reg. no. IN-DP-431-2019 |{" "}
            <Link to="#">Smart Online Dispute Resolution</Link> |{" "}
            <Link to="#">SEBI SCORES</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ResetPassword;