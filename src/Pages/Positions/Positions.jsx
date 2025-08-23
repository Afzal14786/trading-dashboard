import { positions } from "../../data/data";
import "./style.css";

const Positions = () => {
  const hasPositions = positions && positions.length > 0;

  return (
    <>
      {!hasPositions ? (
        <div className="summary">
          <div className="empty_state">
            <div className="description">
              <img
                src="/images/positions.svg"
                alt="order Book"
                className="image"
              />
              <div className="desc_div">
                <p>You don't have any positions yet</p>
              </div>
            </div>

            <div className="empty_btn">
              <button className="btn1">Get Started</button>
              <a href="#" className="view__history">
                Analytics
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="position-table summary">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Name</th>
                <th>Qty</th>
                <th>Avg</th>
                <th>Price</th>
                <th>P&L</th>
                <th>Chg</th>
              </tr>
            </thead>

            <tbody>
              {positions.map((position, index) => (
                <tr key={index}>
                  <td>{position.product}</td>
                  <td>{position.name}</td>
                  <td>{position.qty}</td>
                  <td>{position.avg}</td>
                  <td>{position.price}</td>
                  <td
                    className={position.net.includes("-") ? "loss" : "profit"}
                  >
                    {position.net}
                  </td>
                  <td
                    className={position.day.includes("-") ? "loss" : "profit"}
                  >
                    {position.day}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Positions;
