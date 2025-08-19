import "./style.css";

const BasketsPage = () => {
  return (
    <div className="empty_state">
      <div>
        <div className="description">
          <img src="/images/basket.svg" alt="order Book" className="order__book__img" />

          <div className="desc_div">
            <p>
              You haven't created any baskets.
            </p>
          </div>
        </div>
        <div className="empty_btn">
          <button className="btn1">New Basket</button>
        </div>
      </div>
    </div>
  );
};

export default BasketsPage;
