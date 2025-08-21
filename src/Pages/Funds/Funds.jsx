import React from "react";

import PieChartOutlineIcon from "@mui/icons-material/PieChartOutline";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

import "./style.css";

const fundDetails = [
  { key: "Available margin", value: "0.00" },
  { key: "Used margin", value: "0.00" },
  { key: "Available cash", value: "0.00" },
  { key: "Opening balance", value: "0.00" },
  { key: "Payin", value: "0.00" },
  { key: "Payout", value: "0.00" },
  { key: "SPAN", value: "0.00" },
];

const Funds = () => {

  return (
    <div className="summary summary-container">
      {/* Top bar with buttons */}
      <div className="add_fund_withdraw">
        <p>Instant, zero-cost fund transfers with</p>
        <img src="/images/UPI.svg" alt="upi svg" className="upi__svg" />
        <button className="add_btn">Add funds</button>
        <button className="withdraw_btn">Withdraw</button>
      </div>

      {/* Main funds section */}
      <div className="funds">
        {/* Equity Column */}
        <div className="column">
          <div className="funds_title">
            <span className="left_section">
              <span className="icon-wrapper">
                <PieChartOutlineIcon />
              </span>
              <span className="name">Equity</span>
            </span>
            <span className="right_toolbar">
              <a href="#">View statement</a>
              <a href="#">Help</a>
            </span>
          </div>
          {/* Mapping over data to create rows */}
          {/* data table */}
          <div className="table_data">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div>
                      Available margin
                    </div>
                  </td>
                  <td>
                    <h1 className="value">0.00</h1>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div>
                      Used margin
                    </div>
                  </td>
                  <td>
                    <h1 className="value">0.00</h1>
                  </td>
                </tr>

                <tr className="seperator">
                  <td>
                    <div>
                      Available cash
                    </div>
                  </td>
                  <td>
                    <h1 className="value">0.00</h1>
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>
                      Opening balance
                    </div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>
                      Payin
                    </div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>
                      Payout
                    </div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>
                      SPAN
                    </div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>Delivery margin	</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>Exposure	</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="seperator after_seperator">
                  <td>
                    <div>Options premium</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>Collateral (Liquid funds)</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>Collateral (Equity)</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>Total collateral</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Commodity Column */}
        <div className="column">
          <div className="funds_title">
            <span className="left_section">
              <span className="icon-wrapper">
                <WaterDropIcon /> {/* Changed icon for Commodity */}
              </span>
              <span className="name">Commodity</span>
            </span>
            <span className="right_toolbar">
              <a href="#">View statement</a>
              <a href="#">Help</a>
            </span>
          </div>
          {/* Reusing the same data mapping for the second column */}
          <div className="table_data">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <div>
                      Available margin
                    </div>
                  </td>
                  <td>
                    <h1 className="value">0.00</h1>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div>
                      Used margin
                    </div>
                  </td>
                  <td>
                    <h1 className="value">0.00</h1>
                  </td>
                </tr>

                <tr className="seperator">
                  <td>
                    <div>
                      Available cash
                    </div>
                  </td>
                  <td>
                    <h1 className="value">0.00</h1>
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>
                      Opening balance
                    </div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>
                      Payin
                    </div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>
                      Payout
                    </div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>
                      SPAN
                    </div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>Delivery margin	</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>Exposure	</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>

                <tr className="after_seperator">
                  <td>
                    <div>Options premium</div>
                  </td>
                  <td>
                    0.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Funds;