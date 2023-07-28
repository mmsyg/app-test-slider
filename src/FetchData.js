import React, { useState, useEffect } from 'react';

const FetchData = ({ url, render }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (isLoading) {
    return <p>Trwa wczytywanie danych...</p>;
  }

  if (error) {
    return <p>Wystąpił błąd podczas pobierania danych: {error.message}</p>;
  }

  return render(data);
};

export default FetchData;
