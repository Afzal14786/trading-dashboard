import "./style.css";

const BasketsPage = () => {
  return (
    <div className="order__book">
      <div className="order__status">
        <div className="desc">
          <img src="/images/basket.svg" alt="order Book" className="order__book__img" />

          <div className="desc_div">
            <p>
              You haven't created any baskets.
            </p>
          </div>
        </div>
        <div className="btn">
          <button className="get__started__btn">New Basket</button>
        </div>
      </div>
    </div>
  );
};

export default BasketsPage;
