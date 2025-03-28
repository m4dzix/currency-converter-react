import { useState, useEffect } from "react";

export const useRates = () => {
  const [data, setData] = useState({
    rates: "",
    date: "",
  });

  useEffect(() => {
    const getApi = () => {
      const currenciesAPI =
        "http://api.exchangeratesapi.io/v1/latest?access_key=9d3f5adaee6e9458ce63aab170cfd3c6";

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
