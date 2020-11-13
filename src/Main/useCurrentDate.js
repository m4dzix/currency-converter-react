import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [showDate, setShowDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return showDate;
};
