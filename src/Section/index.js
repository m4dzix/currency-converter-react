import React from "react";
import { Paragraph, Link, Span } from "./styled";
import { useRates } from "../useRates";

const Section = () => {
  return (
    <section>
      <Paragraph>
        Kursy walut pochodzą ze strony :
        <Link
          href="http://exchangeratesapi.io/"
          target="_blank"
          rel="noreferrer noopener"
        >
          {" "}
          "exchangeratesapi.io"
        </Link>{" "}
        <Span> (otworzy się w nowej karcie)</Span> ; są publikowane przez
        Europejski Bank Centralny z dnia: &nbsp;{useRates().date}
      </Paragraph>
    </section>
  );
};

export default Section;
