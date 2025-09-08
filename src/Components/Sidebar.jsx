import { useState, useContext } from "react";
import "./sidebar.css";
import { Search, ArrowDownUp } from "lucide-react";
import { Link } from "react-router-dom";
import { WatchListItem } from "./WatchListItem";

import { watchlist } from "../data/data";
import useStockSearch from "../hooks/useStockSearch";
import DonutChart from "../charts/DonutChart";

const Sidebar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState("");
  const { results, loading, hasSearched } = useStockSearch(query);

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
        <div className="search-input-wrapper">
          <Search className="search-icon" /> {/* Add the Search component */}
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search eg: infy bse, nifty fut, index fund, etc"
            className="sidebar-search-bar"
          />
          {/* here all the result will display */}
          <div className="sidebar-search-result">
            {loading && <div className="loader-sidebar">Loading...</div>}

            {!loading &&
              results.length > 0 &&
              results.map((stock, idx) => (
                <div
                  key={idx}
                  className="sidebar-search-item"
                  onClick={() => onSelect(stock)}
                >
                  <div>
                    {stock.name} ({stock.symbol})
                  </div>
                  <div className="exchange-sidebar">{stock.exchange}</div>
                </div>
              ))}

            {!loading && hasSearched && results.length === 0 && (
              <div className="no-results-sidebar">No stocks found</div>
            )}
          </div>
        </div>

        <div className="right-components">
          <span className="shortcut">ctrl + K</span>
          <ArrowDownUp className="sort-icon" />
        </div>
      </div>

      {/* Watchlist metadata */}
      <div className="watchlist-size">
        <span className="counts"> {filteredWatchlist.length} / 50</span>
        <span className="new-group">
          <Link onClick={() => alert("Create new group feature coming soon!")}>
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
