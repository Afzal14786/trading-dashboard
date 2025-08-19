import "./style.css"

const HoldingAll = () => {
  return (
    <>
      <p className="title">Holdings</p>

      <div className="holding__info">
        {/* image */}
        <img
          src="/images/holdings__bag__images.svg"
          alt="holdings__bag__images"
          className="holding__image"
        />
        <div className="description">
          <p>
            You don't have any stocks in your DEMAT yet. Get started with
            absolutely free equity investments.
          </p>
        </div>

        <div className="empty_btn">
          <button className="btn1">Get Started</button>
        </div>

        <a href="#" className="analytics">
          Analytics
        </a>
      </div>
    </>
  );
};

export default HoldingAll;
