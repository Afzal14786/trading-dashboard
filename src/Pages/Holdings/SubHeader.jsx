import React from 'react';
// Import NavLink instead of Link
import { NavLink } from "react-router-dom"; 

import "./style.css";

const SubHeader = () => {
  return (
    <>
      <div className="holding_sub_header">
        <nav className="holding__nav">
          <ul style={{ listStyle: "none" }}>
            <li>
              <NavLink 
                className="links" 
                to="/holdings/all"
              >
                All
              </NavLink>
            </li>

            <li>
              <NavLink 
                className="links" 
                to="/holdings/equity"
              >
                Equity
              </NavLink>
            </li>

            <li>
              <NavLink 
                className="links" 
                to="/holdings/mutualfund"
              >
                Mutual funds
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
export default SubHeader;