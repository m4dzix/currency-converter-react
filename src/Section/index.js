import React from "react";
import {Paragraph, Link, Span} from "./styled";

const Section = () => (
  <section>
    <Paragraph>Kursy walut pochodzą ze strony : 
    <Link
      href="https://internetowykantor.pl/kursy-walut/"
      target="_blank" rel="noreferrer noopener">
      "internetowykantor.pl"
    </Link> 
      z dnia 7 lipca 2020
      <Span> (otworzy się w nowej karcie)</Span>
    </Paragraph>
  </section>
);

export default Section;