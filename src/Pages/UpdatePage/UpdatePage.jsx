import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const UpdatePage = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isCurrentPasswordFocused, setIsCurrentPasswordFocused] =
    useState(false);
  const [isNewPasswordFocused, setIsNewPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);

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
              {/* Current password input */}
              <div
                className={`input_wrapper ${
                  isCurrentPasswordFocused || currentPassword ? "focused" : ""
                }`}
              >
                <label htmlFor="current_password">Current password</label>
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  id="current_password"
                  className="password_input"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  onFocus={() => setIsCurrentPasswordFocused(true)}
                  onBlur={() => setIsCurrentPasswordFocused(false)}
                  placeholder=""
                />
                <span
                  className="toggle_password"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </span>
              </div>

              {/* New password input */}
              <div
                className={`input_wrapper ${
                  isNewPasswordFocused || newPassword ? "focused" : ""
                }`}
              >
                <label htmlFor="new_password">New password</label>
                <input
                  type={showNewPassword ? "text" : "password"}
                  id="new_password"
                  className="password_input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  onFocus={() => setIsNewPasswordFocused(true)}
                  onBlur={() => setIsNewPasswordFocused(false)}
                  placeholder=""
                />
                <span
                  className="toggle_password"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </span>
              </div>

              {/* Confirm new password input */}
              <div
                className={`input_wrapper ${
                  isConfirmPasswordFocused || confirmPassword ? "focused" : ""
                }`}
              >
                <label htmlFor="confirm_password">Confirm new password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirm_password"
                  className="password_input"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus={() => setIsConfirmPasswordFocused(true)}
                  onBlur={() => setIsConfirmPasswordFocused(false)}
                  placeholder=""
                />
                <span
                  className="toggle_password"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </span>
              </div>
            </div>

            <div className="btns_divs">
              <button className="btns submit">Submit</button>
              <button className="btns cancel">Cancel</button>
            </div>
          </div>

          {/* Password tips */}
          <div className="password_tips">
            <h4>Password tips</h4>
            <div className="tips">
              <ul>
              <li>Choose long passwords.</li>
              <li>
                Meaningless phrases made up of multiple words make for secure
                passwords. These are memorable and cannot be guessed easily. For
                example: <span>icy mangoes fly kites high.</span>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePage;
