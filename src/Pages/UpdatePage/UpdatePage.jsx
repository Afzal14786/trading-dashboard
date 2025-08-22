import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const UpdatePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <>
      <div className="summary update_container">
        <div className="update_header">
          <h3>Account security</h3>
        </div>

        <div className="update_row">
          <div className="change_password_div">
            <h4>Change password</h4>
            <div className="password_inputs">
              <input
                type="password"
                id="password"
                placeholder="Current password"
              />
              <input type="password" id="password" placeholder="New password" />
              <input
                type="password"
                id="password"
                placeholder="Confirm new password"
              />
            </div>

            <div className="btns_divs">
              <button className="btns submit">Submit</button>
              <button className="btns cancel">Cancel</button>
            </div>
          </div>

          {/* password tips */}
          <div className="password_tips">
            <h4>Password tips</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePage;
