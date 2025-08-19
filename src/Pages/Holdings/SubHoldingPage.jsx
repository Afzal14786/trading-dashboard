import React from "react";

const SubHoldingPage = () => {
  return (
    <>
      <div className="sub__holding__page">
        <p className="title">Holdings</p>
        <div className="holding__info">
          {/* image */}
          <img
            src="/images/coin-holdings.png"
            alt="holdings__bag__images"
            className="coin_holding_img"
          />
          <div className="description">
            <p>
              Start investing in commission-free direct mutual funds.
            </p>
          </div>

          <div className="empty_btn">
            <button className="btn1">Get Started</button>
          </div>

          <a href="#" className="analytics">
            Analytics
          </a>
        </div>
      </div>
    </>
  );
};

export default SubHoldingPage;
