import { useEffect, useState } from "react";

const useFetch = (apiFunc, params = null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = params ? await apiFunc(params) : await apiFunc();
        setData(result);
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiFunc, params]);

  return { data, loading, error };
};

export default useFetch;