import { useState, useContext } from "react";
import api from "../api/api.js";
import { GeneralContext } from "./GeneralContext";
import "./BuyActionWindow.css";
import { toast } from "react-toastify";
import ReactDOM from "react-dom";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow, onBuySuccessCallback } = useContext(GeneralContext);

  const handleBuyClick = async () => {

    const token = localStorage.getItem("accessToken");
    const symbol = uid;
    try {
      const response = await api.post("/order/new-order", {
        symbol: symbol,
        quantity: Number(stockQuantity),
        price: Number(stockPrice),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success){
        toast.success(response.data.message || "Order Placed Successfully");
        if (onBuySuccessCallback) {
          onBuySuccessCallback();
        }
        closeBuyWindow();
      } else {
        toast.error(response.data.message || "Failed to place order");
      }

    } catch (err) {
      console.error("Error placing order:", err);
      toast.error("Failed to place order.");
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return ReactDOM.createPortal(
    <div className="buy-window-overlay">
      <div className="buy-window-container">
        <div className="buy-window-header">
          <div className="logo-circle">
            <img src="kite-logo.svg" alt="Platform Logo" />
          </div>
          <h2>
            Buy <span className="stock-uid">{uid}</span>
          </h2>
        </div>

        <div className="regular-order">
          <div className="inputs">
            <fieldset>
              <legend>Qty.</legend>
              <input
                type="number"
                name="qty"
                id="qty"
                onChange={(e) => setStockQuantity(e.target.value)}
                value={stockQuantity}
                min="1"
              />
            </fieldset>
            <fieldset>
              <legend>Price</legend>
              <input
                type="number"
                name="price"
                id="price"
                step="0.05"
                onChange={(e) => setStockPrice(e.target.value)}
                value={stockPrice}
                min="0"
              />
            </fieldset>
          </div>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <button className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </button>
            <button className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("buy-modal-root")
  );
};

export default BuyActionWindow;