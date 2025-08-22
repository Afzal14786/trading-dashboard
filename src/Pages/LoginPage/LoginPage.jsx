import { Link } from "react-router-dom";
import "./style.css";

const LoginPage = () => {
  return (
    <>
      <div className="login_container">
        {/* header section */}

        <div className="login_page">
          <div className="header">
            <div className="profile_image_login">
              <img src="/images/profile_test.jpg" alt="" />
            </div>
            <p className="user_name">CKV524</p>
            <Link className="change_user">Change user</Link>
          </div>

          <div className="password_div">
            <input
              type="password"
              name=""
              id="password"
              className="password_input"
              placeholder="Enter Your Password"
            />
            <button className="login_btn">Login</button>
          </div>

          <Link className="forgot">Forgot user ID or password?</Link>
        </div>
      </div>

      {/* footer section */}
      <div className="login_footer">
        <div className="logos">
          <img src="/images/playstore.svg" alt="play store" />
          <img src="/images/app_store.svg" alt="apple logo" />
        </div>

        <div className="zerodha_logo">
          <img src="/images/zerodha-logo.svg" alt="zerodha logo" />
        </div>

        <div className="dont_have_an_account">
            <Link className="sign_up">Don't have an account? Signup now!</Link>
        </div>

        <div className="login_description">
          <p>Zerodha Broking Limited: Member of <Link>NSE</Link>, <Link>BSE</Link> ‐ SEBI Reg. no.
          INZ000031633, <Link>CDSL</Link> ‐ <Link>SEBI</Link> Reg. no. IN-DP-431-2019 | <Link>Smart Online
          Dispute Resolution</Link> | <Link>SEBI SCORES</Link></p>
        </div>

        <div className="version">
            <p>v3.0.0</p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
