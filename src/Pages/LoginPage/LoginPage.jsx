import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [phoneOrUserId, setPhoneOrUserId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login_container_new">
      <div className="login_page_new">
        <div className="logo_container">
          {/* Logo similar to the image */}
          <img src="kite-logo.svg" alt="Kite Logo" className="kite_logo" />
        </div>
        
        <h2 className="login_title">Login to Kite</h2>

        {/* Phone or User ID field */}
        <div className="input_wrapper_new">
          <label htmlFor="phone_userid" className={isPhoneFocused || phoneOrUserId ? "floated" : ""}>
            Phone or User ID
          </label>
          <input
            type="text"
            id="phone_userid"
            className="input_field"
            value={phoneOrUserId}
            onChange={(e) => setPhoneOrUserId(e.target.value)}
            onFocus={() => setIsPhoneFocused(true)}
            onBlur={() => setIsPhoneFocused(false)}
          />
        </div>

        {/* Password field with floating label and toggle */}
        <div className="input_wrapper_new">
          <label htmlFor="password" className={isPasswordFocused || password ? "floated" : ""}>
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
            {showPassword ? <VisibilityOffIcon/> : <VisibilityIcon/>}
          </span>
        </div>

        <button className="login_btn_new">Login</button>
        <Link className="forgot_link">Forgot user ID or password?</Link>
      </div>
    </div>
  );
};

export default LoginPage;