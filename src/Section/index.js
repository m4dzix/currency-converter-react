import React from "react";
import { Paragraph, Link } from "./styled";
import { useRates } from "../useRates";

const Section = () => {
  return (
    <section>
      <Paragraph>
        Kursy walut pochodzą ze strony:
        <Link
          href="https://exchangerate.host/#/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          exchangerate.host
        </Link>
        . Są publikowane przez Europejski Bank Centralny z dnia: &nbsp;
        {useRates().date}
      </Paragraph>
    </section>
  );
};

export default Section;
