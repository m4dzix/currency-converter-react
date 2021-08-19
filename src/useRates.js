import { useState, useEffect } from "react";

export const useRates = () => {
  const [data, setData] = useState({
    rates: "",
    date: "",
  });

  useEffect(() => {
    const getApi = () => {
      const currenciesAPI =
        "http://api.exchangeratesapi.io/v1/latest?access_key=c0374f958fe4c9766ba330c60d02c1af";

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
