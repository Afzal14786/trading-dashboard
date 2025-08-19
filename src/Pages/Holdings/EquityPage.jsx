import React, {useState} from "react";
import "./style.css"

// The Dropdown component is now a sibling component in the same file.
const Dropdown = ({ options, onSelect, defaultOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Correct: Initialize state with the defaultOption prop.
  const [selectedOption, setSelectedOption] = useState(defaultOption || 'Select an Option');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    // Correct: Update the selected option in state.
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
          {/* Correct: Display the selectedOption state */}
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
          {/* Correct: Use the correct wrapper class */}
          <div className="dropdown-options-list">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                // Correct: Use the `dropdown-item` class
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
  const dropdownOptions = ['All equity', 'MTF', 'Kite only', 'Smallcase'];
  const handleOptionSelect = (selectedOption) => {
    console.log('Selected:', selectedOption);
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
            <button className="btn1">Get Started</button>
          </div>

          <a href="#" className="analytics">
            Analytics
          </a>
        </div>
      </div>
    </>
  );
};

export default EquityPage;