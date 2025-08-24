import { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import "./style.css";
import ShowChartIcon from "@mui/icons-material/ShowChart";

import { Tooltip, Grow } from "@mui/material";
import { Search, ArrowDownUp } from "lucide-react";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";

import DonutChart from "../charts/DonutChart"

const Sidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const labels = watchlist.map((subArray)=> subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock)=> stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      {/* watchlist searchbar */}
      <div className="watchlist-container">
        {/* search container */}
        <div className="search-container">
          <label htmlFor="search-input" className="search-icon-container">
            <Search className="search-icon" />
          </label>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search eg: infy bse, nifty fut, index fund, et"
            className="search-input"
            name="search-input"
            id="search-input"
          />
          <div className="keyboard-shortcut">
            <span className="font-sans">Ctrl + K</span>
          </div>

          <button className="sort-button">
            <ArrowDownUp className="sort-icon" />
          </button>
        </div>

        <div className="watchlist-size">
          <span className="counts"> {watchlist.length} / 50</span>
          <span className="new-group">
            <a href="#">+ New group</a>
          </span>
        </div>

        <ul className="list">
          {watchlist.map((stock, index) => {
            return <WatchListItem stock={stock} key={index} />;
          })}
        </ul>



      <div className="donut-graph">
          <DonutChart data={data}/>
      </div>
      </div>
    </>
  );
};

export default Sidebar;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        {/* stock name */}
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>

        {/* stock information */}
        <div className="itemInfo">
          <span className="precent2">{stock.percent}</span>

          <span>
            {stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="up" />
            )}
          </span>

          <span className="price price_list">{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="buy" onClick={handleBuyClick}>
          Buy
        </button>
      </Tooltip>

      <Tooltip
        title="Sell (S)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="sell">Sell</button>
      </Tooltip>

      <Tooltip
        title="Market Depth (D)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action">
          <BarChartOutlined className="icon" />
        </button>
      </Tooltip>

      <Tooltip
        title="Chart (C)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action">
          <ShowChartIcon className="icon" />
        </button>
      </Tooltip>

      <Tooltip
        title="Delete (del)"
        placement="top"
        arrow
        TransitionComponent={Grow}
      >
        <button className="action">
          <DeleteIcon className="icon" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="action">
          <MoreHoriz className="icon" />
        </button>
      </Tooltip>
    </span>
  );
};
