import { useState, useEffect } from "react";
import api from "../api/api.js"

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
        const res = await api.get(
          `/api/v1/stocks/search?q=${query}`
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
