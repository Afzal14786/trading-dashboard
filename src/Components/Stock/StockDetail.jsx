import { useState, useEffect } from "react";
import useStockSearch from "../../hooks/useStockSearch";
import "./StockDetail.css";

const StockDetail = ({ stock, onBuyClick, onSellClick, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { results: searchResults } = useStockSearch(searchQuery);
  const [selectedStock, setSelectedStock] = useState(stock);

  const {
    name,
    symbol,
    exchange,
    price,
    change,
    percentChange,
    open,
    high,
    low,
    prevClose,
    volume,
    bids = [],
    offers = [],
    lastTradedTime,
  } = selectedStock;

  const formatNum = (num) =>
    num !== undefined && num !== null ? Number(num).toFixed(2) : "N/A";

  return (
    <div className="modal-backdrop">
      <div className="stock-detail-modal">
        {/* Search bar inside modal */}
        <div className="stock-search-bar">
          <input
            type="text"
            placeholder="Search eg: infy, tcs, index fund..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchResults.length > 0 && (
            <div className="search-dropdown">
              {searchResults.map((result, idx) => (
                <div
                  key={idx}
                  className="search-item"
                  onClick={() => {
                    setSelectedStock(result);
                    setSearchQuery("");
                  }}
                >
                  <strong>{result.symbol}</strong> - {result.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* HEADER */}
        <div className="header">
          <div className="stock-name">
            <h2>{symbol}</h2>
            <span>
              {name} - {exchange}
            </span>
          </div>
          <div className="stock-price">
            <h2>₹{formatNum(price)}</h2>
            <span style={{ color: change < 0 ? "red" : "green" }}>
              {change < 0 ? "" : "+"}
              {formatNum(change)} ({formatNum(percentChange)}%)
            </span>
          </div>
        </div>

        <hr />

        {/* BID & OFFER SECTION */}
        <div className="bid-offer-section-new">
          <div className="table-container">
            <div className="table-header-row">
              <span className="bid-header">Bid</span>
              <span className="header">Orders</span>
              <span className="header">Qty.</span>
            </div>
            <div className="table-scroll-thin">
              {bids.slice(0, 5).map((bid, i) => (
                <div key={i} className="table-row">
                  <span className="bid-price">{formatNum(bid.price)}</span>
                  <span className="bid-orders">{bid.orders}</span>
                  <span className="bid-qty">{bid.qty}</span>
                </div>
              ))}
              <div className="table-row total-row">
                <span>Total</span>
                <span>{bids.reduce((acc, b) => acc + (b.orders || 0), 0)}</span>
                <span>{bids.reduce((acc, b) => acc + (b.qty || 0), 0)}</span>
              </div>
            </div>
          </div>

          <div className="table-container">
            <div className="table-header-row">
              <span className="offer-header">Offer</span>
              <span className="header">Orders</span>
              <span className="header">Qty.</span>
            </div>
            <div className="table-scroll-thin">
              {offers.slice(0, 5).map((offer, i) => (
                <div key={i} className="table-row">
                  <span className="offer-price">{formatNum(offer.price)}</span>
                  <span className="offer-orders">{offer.orders}</span>
                  <span className="offer-qty">{offer.qty}</span>
                </div>
              ))}
              <div className="table-row total-row">
                <span>Total</span>
                <span>
                  {offers.reduce((acc, o) => acc + (o.orders || 0), 0)}
                </span>
                <span>{offers.reduce((acc, o) => acc + (o.qty || 0), 0)}</span>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* Price Stats */}
        <div className="price-stats-box">
          <div className="price-left">
            <div>
              Open <strong>₹{formatNum(open)}</strong>
            </div>
            <div>
              Low <strong>₹{formatNum(low)}</strong>
            </div>
          </div>
          <div className="price-right">
            <div>
              Prev. Close <strong>₹{formatNum(prevClose)}</strong>
            </div>
            <div>
              High <strong>₹{formatNum(high)}</strong>
            </div>
          </div>
        </div>

        <hr />

        {/* Volume & Time */}
        <div className="volume-stats-box">
          <div className="volume-left">
            <div>
              Volume <strong>{volume?.toLocaleString() || "N/A"}</strong>
            </div>
            <div>
              LTQ <strong>{bids?.[0]?.qty || "N/A"}</strong>
            </div>
          </div>
          <div className="volume-right">
            <div>
              Avg. Price <strong>₹{formatNum((high + low) / 2)}</strong>
            </div>
            <div>
              LTT{" "}
              <strong>
                {lastTradedTime
                  ? new Date(lastTradedTime).toLocaleString()
                  : "N/A"}
              </strong>
            </div>
          </div>
        </div>

        <hr />

        {/* ACTION BUTTONS */}
        <div className="action-buttons">
          <button className="gtt-btn" onClick={() => alert("GTT coming soon")}>
            Create GTT
          </button>
          <div className="right-buttons">
            <button className="buy-btn" onClick={() => onBuyClick(symbol)}>
              Buy
            </button>
            <button className="sell-btn" onClick={() => onSellClick(symbol)}>
              Sell
            </button>
            <button className="close-btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
