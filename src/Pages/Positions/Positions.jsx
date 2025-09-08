import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GeneralContext } from "../../Components/GeneralContext"; // adjust path as needed
import StockSearchModal from "../../Components/Stock/StockSearchModel";
import StockDetail from "../../Components/Stock/StockDetail";
import { toast } from "react-toastify";
import "./style.css";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const { openBuyWindow } = useContext(GeneralContext);
  const [onBuySuccessCallback, setOnBuySuccessCallback] = useState(null);
  const token = localStorage.getItem("accessToken");

  const refreshPositions = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5174/api/v1/positions/allPositions",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllPositions(res.data);
    } catch (err) {
      console.error("Failed to refresh holdings", err);
    }
  };

  useEffect(() => {
    const fetchAllPositions = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5174/api/v1/positions/allPositions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAllPositions(res.data);
      } catch (err) {
        console.error(`Error while fetching the positions`);
        toast.error(`Failed to fetch positions. refresh again`);
      }
    };

    fetchAllPositions();
  }, []);

  const hasPositions = allPositions && allPositions.length > 0;

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
              <button className="btn1" onClick={() => setIsSearchOpen(true)}>Get Started</button>
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
              {allPositions.map((position, index) => (
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

      {isSearchOpen && (
        <StockSearchModal
          onSelect={(stock) => {
            setSelectedStock(stock);
            setIsSearchOpen(false);
          }}
          onClose={() => setIsSearchOpen(false)}
        />
      )}

      {selectedStock && (
        <StockDetail
          stock={selectedStock}
          onBuyClick={(uid) => {
            openBuyWindow(uid, refreshPositions);
            setSelectedStock(null);
          }}
          onSellClick={(uid) => {
            alert("Sell functionality coming soon");
            setSelectedStock(null);
          }}
          onClose={() => setSelectedStock(null)}
        />
      )}
    </>
  );
};

export default Positions;
