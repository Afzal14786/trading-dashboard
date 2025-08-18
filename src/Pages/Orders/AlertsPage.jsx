import "./style.css";

const AlertsPage = () => {
  return (
    <div className="order__book">
      <div className="order__status">
        <div className="desc">
          <img
            src="/images/alert.svg"
            alt="order Book"
            className="alert_icon"
          />

          <div className="desc_div">
            <p>You haven't created any alerts.</p>
          </div>
        </div>
        <div className="btn">
          <button className="get__started__btn">Create new alert</button>
        </div>
      </div>
    </div>
  );
};

export default AlertsPage;
