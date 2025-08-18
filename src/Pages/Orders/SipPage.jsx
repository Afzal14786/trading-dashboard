import "./style.css";

const SipPage = () => {
  return (
    <div className="order__book">
      <div className="order__status">
        <div className="desc">
          <img
            src="/images/sip.svg"
            alt="order Book"
            className="sip__image"
          />

          <div className="desc_div">
            <p>You haven't created any SIPs.</p>
          </div>
        </div>
        <div className="btn">
          <button className="get__started__btn">Create new SIP</button>
        </div>
      </div>
    </div>
  );
};

export default SipPage;
