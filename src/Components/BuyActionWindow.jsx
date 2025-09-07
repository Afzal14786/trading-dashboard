import { useState, useContext } from "react";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";
import "./BuyActionWindow.css";
import {toast} from "react-toastify"

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const generalContext = useContext(GeneralContext);
  const { closeBuyWindow, onBuySuccessCallback } = generalContext;


  const handleBuyClick = async () => {
    try {
      await axios.post("http://localhost:3000/new-order", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      toast.success("Order placed successfully!");
      if (onBuySuccessCallback) {
        onBuySuccessCallback();
      }
    } catch (err) {
      console.error("Error placing order:", err);
      toast.error("Failed to place order.");
    }

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
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
    </div>
  );
};

export default BuyActionWindow;
