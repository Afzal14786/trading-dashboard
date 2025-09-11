import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import api from "../../api/api.js"
import { toast } from "react-toastify";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase";
import ResetFooter from "../ResetPage/ResetFooter.jsx";
import "./style.css";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";


const isTenDigitPhone = (input) => /^\d{10}$/.test(input);

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isIdentifierFocused, setIsIdentifierFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");

  const [currentStep, setCurrentStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [authType, setAuthType] = useState("");

  const navigate = useNavigate();
  const [confirmationResult, setConfirmationResult] = useState(null);
  const recaptchaContainerRef = useRef(null);

  // Setup reCAPTCHA when phone number is valid
  useEffect(() => {
    if (isTenDigitPhone(identifier) && !window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          auth,
          "recaptcha-container",
          {
            size: "invisible",
            callback: () => {
              console.log("reCAPTCHA verified");
            },
            "expired-callback": () => {
              toast.error("reCAPTCHA expired. Please reload the page.");
            },
          }
        );
      } catch (err) {
        console.error("Recaptcha init error:", err);
      }
    }
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    };
  }, [identifier]);

  const sendPhoneOtp = async () => {
    try {
      const appVerifier = window.recaptchaVerifier;
      const fullPhoneNumber = `+91${identifier}`;

      const result = await signInWithPhoneNumber(
        auth,
        fullPhoneNumber,
        appVerifier
      );
      setConfirmationResult(result);
      toast.success("OTP sent to your phone number.");
    } catch (err) {
      console.error("Firebase phone auth error:", err);
      toast.error("Error sending OTP. Please check your number.");
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    }
  };

  const handleLogin = async () => {
    if (!identifier || !password) {
      return toast.error("All fields are required.");
    }

    setIsLoading(true);
    try {
      const response = await api.post(`/user/login`, {
        identifier,
        password,
      });

      if (response.data.success) {
        setAuthType(response.data.auth_type);

        if (response.data.auth_type === "email") {
          toast.success(response.data.message);
        }

        if (response.data.auth_type === "phone") {
          await window.recaptchaVerifier.render();
          sendPhoneOtp();
        }

        setCurrentStep(2);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpVerify = async () => {
    if (otp.length !== 6) {
      return toast.error("OTP must be 6 digits.");
    }

    setIsLoading(true);
    try {
      let response;
      if (isTenDigitPhone(identifier)) {
        if (!confirmationResult) {
          toast.error("Something went wrong with phone verification.");
          return;
        }
        await confirmationResult.confirm(otp);
        response = await api.post(`user/login/verify-otp`, {
          identifier,
          otp: "verified",
        });
      } else {
        response = await api.post(`/user/login/verify-otp`, {
          identifier,
          otp,
        });
      }

      if (response.data.success) {
        toast.success(response.data.message);

        const { accessToken } = response.data.data.tokens;
        localStorage.setItem("accessToken", accessToken);

        navigate("/", {
          state: { userData: response.data.data.user },
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed.");
      console.error("Verification error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (isTenDigitPhone(identifier)) {
        await window.recaptchaVerifier.render();
        sendPhoneOtp();
      } else {
        await api.post(`/login`, { identifier, password });
        toast.success("New OTP sent to your email.");
      }
    } catch {
      toast.error("Failed to resend OTP.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginOrOtp = (e) => {
    e.preventDefault();
    if (currentStep === 1) {
      handleLogin();
    } else {
      handleOtpVerify();
    }
  };

  return (
    <div className="main_page_container">
      <div className="login_container_new">
        <form onSubmit={handleLoginOrOtp} className="login_page_new">
          <div className="logo_container">
            <img src="kite-logo.svg" alt="Kite Logo" className="kite_logo" />
          </div>

          <h2 className="login_title">Login to Kite</h2>

          {currentStep === 1 ? (
            <>
              {/* Identifier */}
              <div className="input_wrapper_new">
                <label
                  htmlFor="identifier"
                  className={isIdentifierFocused || identifier ? "floated" : ""}
                >
                  Phone or User ID
                </label>
                <input
                  type="text"
                  id="identifier"
                  className="input_field"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  onFocus={() => setIsIdentifierFocused(true)}
                  onBlur={() => setIsIdentifierFocused(false)}
                />
              </div>

              {/* Password */}
              <div className="input_wrapper_new">
                <label
                  htmlFor="password"
                  className={isPasswordFocused || password ? "floated" : ""}
                >
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="input_field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                />
                <span
                  className="toggle_password_new"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
              </div>

              <button type="submit" className="login_btn_new" disabled={isLoading}>
                {isLoading ? "Loading..." : "Login"}
              </button>
              <Link to="/reset-password" className="forgot_link">
                Forgot user ID or password?
              </Link>
            </>
          ) : (
            <>
              {/* OTP Step */}
              <h2 className="login_title_otp">OTP</h2>
              <p className="otp_sent_message">
                An OTP has been sent to your registered{" "}
                {authType === "email" ? "email." : "phone number."}
              </p>
              <div className="input_wrapper_new">
                <input
                  type="text"
                  id="otp"
                  className="input_field"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                />
              </div>
              <button type="submit" className="login_btn_new" disabled={isLoading}>
                {isLoading ? "Verifying..." : "Verify OTP"}
              </button>
              <Link to="#" className="forgot_link" onClick={handleResendOtp}>
                Resend OTP
              </Link>
            </>
          )}
        </form>
      </div>

      {/* Footer Section */}
      <ResetFooter/>

      {/* Invisible Recaptcha */}
      <div id="recaptcha-container" ref={recaptchaContainerRef} style={{ display: "none" }} />
    </div>
  );
};

export default LoginPage;
