import "./style.css";

const GttPage = () => {
  return (
    <div className="order__book">
      <div className="order__status">
        <div className="desc">
          <img src="/images/gtt.svg" alt="order Book" className="gtt__image" />

          <div className="desc_div">
            <p>
                You have not created any triggers. <a href="#" className="learn__more">Learn more</a> about setting
            automatic stoploss and target orders for your holdings.
            </p>
        </div>
        </div>
        <div className="btn">
          <button className="get__started__btn">New GTT</button>
        </div>
      </div>
    </div>
  );
};

export default GttPage;
