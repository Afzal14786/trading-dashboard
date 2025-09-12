import { useState, useEffect, useContext } from "react";
import api from "../../api/api.js";
import { GeneralContext } from "../../Components/GeneralContext";
import StockSearchModal from "../../Components/Stock/StockSearchModel";
import StockDetail from "../../Components/Stock/StockDetail";
import { toast } from "react-toastify";

import "./style.css";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const { openBuyWindow } = useContext(GeneralContext);
  const token = localStorage.getItem("accessToken");

  const refreshOrders = async () => {
    try {
      const res = await api.get("/api/v1/orders/all-orders", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllOrders(res.data);
    } catch (err) {
      console.error("Failed to refresh orders", err);
    }
  };

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        const response = await api.get("/api/v1/order/all-orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setAllOrders(response.data);
      } catch (err) {
        console.error(`Error while fetching all the orders: ${err}`);
        toast.error(`Failed to fetch orders, kindly refresh again`);
      }
    };

    fetchAllOrders();
  }, [token]);

  const hasOrders = allOrders && allOrders.length > 0;

  const formatDate = (dateString) => {
    const options = { hour: "2-digit", minute: "2-digit", day: "2-digit", month: "short" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      {hasOrders ? (
        // Render the table if orders exist
        <div className="orders-table-container">
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Order</th>
                <th>Product</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order) => (
                <tr key={order.transactionId}>
                  <td>{formatDate(order.tradeDate)}</td>
                  <td>{order.symbol}</td>
                  <td>{order.orderType || 'CNC'}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td>
                    <span className={`status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Render the empty state if there are no orders
        <div className="empty_state">
          <div>
            <div className="description">
              <img
                src="/images/orderbook.svg"
                alt="order Book"
                className="image"
              />
              <div className="desc_div">
                <p>You haven't placed any orders today</p>
              </div>
            </div>
            <div className="empty_btn">
              <button className="btn1" onClick={() => setIsSearchOpen(true)}>
                Get Started
              </button>
              <a href="#" className="view__history">
                View History
              </a>
            </div>
          </div>
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
            openBuyWindow(uid, refreshOrders);
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

export default Orders;