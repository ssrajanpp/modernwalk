import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoading(false);
          setData(data);
        },
        (error) => {
          setIsLoading(false);
          setError(error);
        }
      );
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;