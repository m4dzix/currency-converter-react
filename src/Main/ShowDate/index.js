import React from "react";
import { useCurrentDate } from "../useCurrentDate";
import { StyledDate } from "./styled";

const formatDate = (date) =>
  date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });

const ShowDate = () => {
  const date = useCurrentDate();
  return <StyledDate>Aktualna data i godzina: {formatDate(date)}</StyledDate>;
};

export default ShowDate;
