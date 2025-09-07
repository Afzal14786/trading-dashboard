import { useState, useEffect } from "react";
import axios from "axios";

const useStockSearch = (query) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const fetchStocks = async () => {
      if (query.trim().length === 0) {
        setResults([]);
        setHasSearched(false);
        return;
      }

      setLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5174/api/v1/stocks/search?q=${query}`
        );

        if (res.data.success) {
          setResults(res.data.data);
        } else {
          setResults([]);
        }

        setHasSearched(true);
      } catch (err) {
        console.error("Stock search failed:", err);
        setResults([]);
        setHasSearched(true);
      } finally {
        setLoading(false);
      }
    };

    const delay = setTimeout(fetchStocks, 300);
    return () => clearTimeout(delay);
  }, [query]);

  return { results, loading, hasSearched };
};

export default useStockSearch;
