import { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://api.openbrewerydb.org/breweries";

export const useGetData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(URL);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {};
  }, []);

  return { data, error, loading };
};
