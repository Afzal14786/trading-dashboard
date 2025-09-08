import { useState, useEffect, useContext } from "react";
import api from "../../api/api.js";
import VerticalChart from "../../charts/VerticalChart";
import { GeneralContext } from "../../Components/GeneralContext"; 
import StockSearchModal from "../../Components/Stock/StockSearchModel";
import StockDetail from "../../Components/Stock/StockDetail";
import { toast } from "react-toastify";

import "./style.css";

const HoldingAll = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const { openBuyWindow } = useContext(GeneralContext);
  const [onBuySuccessCallback, setOnBuySuccessCallback] = useState(null);
  const token = localStorage.getItem("accessToken");
  
  const refreshHoldings = async () => {
    try {
      const res = await api.get(
        "/holdings/allHoldings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAllHoldings(res.data);
    } catch (err) {
      console.error("Failed to refresh holdings", err);
    }
  };

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await api.get(
          "/holdings/allHoldings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = res.data;

        if (Array.isArray(data)) {
          setAllHoldings(data);
        } else {
          setAllHoldings([]);
        }

      } catch (error) {
        console.error("Failed to fetch holdings", error);
        toast.error("Failed to fetch holdings . refresh again");
        setAllHoldings([]);
      }
    };
    fetchHoldings();
  }, []);

  const hasHoldings = allHoldings && allHoldings.length > 0;

  const labels = allHoldings?.map((subArray) => subArray["name"]) || [];

  const data2 = {
    labels: allHoldings?.map((stock) => stock.name) || [],
    datasets: [
      {
        label: "Stock Prices",
        data: allHoldings?.map((stock) => stock.price) || [],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };
  
  return (
    <>
      <p className="title">
        Holdings {hasHoldings ? `(${allHoldings.length})` : ""}
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
            <button className="btn1" onClick={() => setIsSearchOpen(true)}>
              Get Started
            </button>
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
              {allHoldings.map((stock, index) => (
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

      {/* this is rhe graph section */}
      <div className="graph">
        <VerticalChart data={data2} />
      </div>

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
            openBuyWindow(uid, refreshHoldings); 
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

export default HoldingAll;