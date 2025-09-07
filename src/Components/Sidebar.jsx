import { useState, useContext } from "react";
import "./style.css";
import { Search, ArrowDownUp } from "lucide-react";
import {Link} from "react-router-dom"
import { WatchListItem } from "./WatchListItem";

import { watchlist } from "../data/data";
import DonutChart from "../charts/DonutChart";

const Sidebar = () => {
  const [searchValue, setSearchValue] = useState("");

  // Filter the watchlist by search value
  const filteredWatchlist = watchlist.filter((stock) =>
    stock.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const labels = filteredWatchlist.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: filteredWatchlist.map((stock) => stock.price),
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
    <div className="watchlist-container">
      {/* Search bar */}
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

      {/* Watchlist metadata */}
      <div className="watchlist-size">
        <span className="counts"> {filteredWatchlist.length} / 50</span>
        <span className="new-group">
          <Link
            onClick={() => alert("Create new group feature coming soon!")}
          >
            + New group
          </Link>
        </span>
      </div>

      {/* Watchlist items */}
      <ul className="list">
        {filteredWatchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      {/* Donut graph */}
      <div className="donut-graph">
          <DonutChart data={data} />
      </div>
    </div>
  );
};

export default Sidebar;
