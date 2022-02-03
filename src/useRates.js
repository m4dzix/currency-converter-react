import { useState, useEffect } from "react";

export const useRates = () => {
  const [data, setData] = useState({
    rates: "",
    date: "",
  });

  useEffect(() => {
    const getApi = () => {
      const currenciesAPI = "https://api.exchangerate.host/latest";

      fetch(currenciesAPI)
        .then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response;
        })
        .then((response) => response.json())
        .then((currenciesAPI) => {
          const ratesAPI = currenciesAPI.rates;
          const dateAPI = currenciesAPI.date;
          setData({
            rates: ratesAPI,
            date: dateAPI,
          });
        })
        .catch((error) => console.error(error));
    };
    setTimeout(getApi, 1000);
  }, []);
  return data;
};
