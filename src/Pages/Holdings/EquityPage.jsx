import { useState, useContext } from "react";
import api from "../../api/api.js"
import "./style.css";

import { GeneralContext } from "../../Components/GeneralContext";
import StockSearchModal from "../../Components/Stock/StockSearchModel";
import StockDetail from "../../Components/Stock/StockDetail";

const Dropdown = ({ options, onSelect, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultOption || "Select an Option"
  );

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <div>
        <button
          type="button"
          onClick={handleToggle}
          className="dropdown-button"
        >
          {selectedOption}
          <svg
            className="dropdown-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-options-list">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className="dropdown-item"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const EquityPage = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  const { openBuyWindow } = useContext(GeneralContext);
  const [onBuySuccessCallback, setOnBuySuccessCallback] = useState(null);
  const token = localStorage.getItem("accessToken");

  const refreshHoldings = async () => {
    try {
      const res = await api.get(
        "/api/v1/holdings/allHoldings",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.error("Failed to refresh holdings", err);
    }
  };
  
  const dropdownOptions = ["All equity", "MTF", "Kite only", "Smallcase"];
  const handleOptionSelect = (selectedOption) => {
    console.log("Selected:", selectedOption);
  };

  return (
    <>
      <div className="holding__equity">
        <div className="holding__header">
          <p className="holding_title">Holdings</p>
          <Dropdown
            options={dropdownOptions}
            onSelect={handleOptionSelect}
            defaultOption="All equity"
          />
        </div>
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
            <button className="btn1" onClick={() => setIsSearchOpen(true)}>Get Started</button>
          </div>

          <a href="#" className="analytics">
            Analytics
          </a>
        </div>
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

export default EquityPage;