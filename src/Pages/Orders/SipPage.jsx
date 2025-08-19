import "./style.css";

const SipPage = () => {
  return (
    <div className="empty_state">
      <div>
        <div className="description">
          <img
            src="/images/sip.svg"
            alt="order Book"
            className="sip__image"
          />

          <div className="desc_div">
            <p>You haven't created any SIPs.</p>
          </div>
        </div>
        <div className="empty_btn">
          <button className="btn1">Create new SIP</button>
        </div>
      </div>
    </div>
  );
};

export default SipPage;
