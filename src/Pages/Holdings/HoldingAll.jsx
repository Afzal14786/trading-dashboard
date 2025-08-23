import "./style.css";
import { holdings } from "../../data/data";

const HoldingAll = () => {
  const hasHoldings = holdings && holdings.length > 0;
  return (
    <>
      <p className="title">
        Holdings {hasHoldings ? `(${holdings.length})` : ""}
      </p>

      {/* If holdings are empty */}
      {!hasHoldings ? (
        
        <div className="holding__info">
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
      ) : (
        // If holdings exist → render table
        
        <div className="holdings-table">
          <table>
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Avg Price</th>
                <th>Price</th>
                <th>Current Value</th>
                <th>P&L</th>
                <th>Net Chg</th>
                <th>Day Chg</th>
              </tr>
            </thead>

            <tbody>
              {holdings.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{stock.price * stock.qty}</td>
                  <td className={stock.net.includes("-") ? "loss" : "profit"}>
                    {(stock.price * stock.qty - stock.avg * stock.qty).toFixed(
                      2
                    )}
                  </td>
                  <td className={stock.net.includes("-") ? "loss" : "profit"}>
                    {stock.net}
                  </td>
                  <td className={stock.day.includes("-") ? "loss" : "profit"}>
                    {stock.day}
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

export default HoldingAll;
