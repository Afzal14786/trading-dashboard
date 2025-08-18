import React from "react";

import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

import "./style.css";

const Funds = () => {
  return (
    <>
      <div className="summary">
        {/* button parts */}
        <div className="add_fund_withdraw">
          <p>Instant, zero-cost fund transfers with</p>
          <img src="/images/UPI.svg" alt="upi svg" className="upi__svg" />
          <button className="btn add_fund_btn">Add funds</button>
          <button className="btn withdraw_btn">Withdraw</button>
        </div>

        {/* equity */}
        <div className="column equity">
          <h3 className="funds_title">
            {/* Left Section: Icon + Equity Name */}
            <span className="left_section">
              <span className="pi_chart_icon">
                <PieChartOutlineIcon />
              </span>
              <span className="name">equity</span>
            </span>

            {/* Right Section: View Statement + Help */}
            <span className="right_toolbar">
              <a href="#">View statement</a>
              <a href="#">Help</a>
            </span>
          </h3>

          {/* row data section */}

        </div>


      </div>
    </>
  );
};

export default Funds;
