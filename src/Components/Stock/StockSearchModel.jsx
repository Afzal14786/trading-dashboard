import { useState, useEffect } from "react";
import useStockSearch from "../../hooks/useStockSearch"
import "./StockSearchModal.css";

const StockSearchModal = ({ onSelect, onClose }) => {
  const [query, setQuery] = useState("");
  const { results, loading, hasSearched } = useStockSearch(query);
  
  return (
    <div className="search-modal">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search eg: infy, tcs, index fund..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="search-results">
          {loading && <div className="loader">Loading...</div>}

          {!loading && results.length > 0 && (
            results.map((stock, idx) => (
              <div
                key={idx}
                className="search-item"
                onClick={() => onSelect(stock)}
              >
                <div>{stock.name} ({stock.symbol})</div>
                <div className="exchange">{stock.exchange}</div>
              </div>
            ))
          )}

          {!loading && hasSearched && results.length === 0 && (
            <div className="no-results">No stocks found</div>
          )}
        </div>
      </div>

      <button className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default StockSearchModal;
