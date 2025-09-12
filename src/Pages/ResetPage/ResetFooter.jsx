import { Link } from "react-router-dom";
import "./ResetFooter.css";

const ResetFooter = () => {
  return (
    <footer className="reset_footer_new">
      <div className="reset_footer_apps">
        <img src="/images/playstore.svg" alt="play store" className="reset_footer_icon" />
        <img src="/images/app_store.svg" alt="apple logo" className="reset_footer_icon" />
      </div>

      <div className="reset_footer_zerodha_logo">
        <img src="/images/logo.svg" alt="zerodha logo" className="reset_footer_logo" />
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
  );
};

export default ResetFooter;