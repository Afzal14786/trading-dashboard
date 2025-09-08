import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api.js";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { toast } from "react-toastify";
import "./style.css";

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

  const navigate = useNavigate();

  const handleCancel = ()=> {
    // navigate to the dashboard
    navigate("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error(`New password & confirm password do not match`);
      return;
    }

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error(`All fields are required`);
      return;
    }

    try {
      const token = localStorage.getItem("accessToken");
      const res = await api.post(
        "/user/profile/update-password",
        {
          oldPassword: currentPassword,
          newPassword: newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // if the user successfully updated the password, then logout
      if (res.data.success) {
        localStorage.removeItem("accessToken");
        toast.success(`Password updated successfullt, kindly login again`);
        navigate("/login");
      } else {
        toast.error(res.data.message || `Failed to update the password`);
      }
    } catch (err) {
      console.error(`Error while changing the password : ${err}`);
      const errorMsg =
        err.response?.message || `An error occured. Please try again.`;
      toast.error(errorMsg);
    }
  };

  return (
    <>
      <div className="summary update_container">
        <div className="update_header">
          <h3>Account security</h3>
        </div>

        <div className="update_row">
          <div className="change_password_div">
            <h4>Change password</h4>
            {/* adding form */}
            <form onSubmit={handleSubmit}>
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
                    {showNewPassword ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
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
                <button type="submit" className="btns submit">Submit</button>
                <button type="button" className="btns cancel" onClick={handleCancel}>Cancel</button>
              </div>
            </form>
          </div>

          {/* Password tips */}
          <div className="password_tips">
            <h4>Password tips</h4>
            <div className="tips">
              <ul>
                <li>Choose long passwords.</li>
                <li>
                  Meaningless phrases made up of multiple words make for secure
                  passwords. These are memorable and cannot be guessed easily.
                  For example: <span>icy mangoes fly kites high.</span>
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
