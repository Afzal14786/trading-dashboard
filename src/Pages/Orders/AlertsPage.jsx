import "./style.css";

const AlertsPage = () => {
  return (
    <div className="empty_state">
      <div>
        <div className="description">
          <img
            src="/images/alert.svg"
            alt="order Book"
            className="alert_icon"
          />

          <div className="desc_div">
            <p>You haven't created any alerts.</p>
          </div>
        </div>
        <div className="empty_btn">
          <button className="btn1">Create new alert</button>
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
