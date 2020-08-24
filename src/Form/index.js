import React, { useState } from "react";
import {
  StyledForm,
  Paragraph,
  LabelText,
  Span,
  Select,
  Field,
  Button,
  Fieldset,
  Legend,
} from "./styled";
import currencies from "./currencies";
import ShowResult from "./ShowResult";

const Form = ({ calculateResult, result }) => {
  const [currencyHave, setCurrencyHave] = useState(currencies[0].shortName);
  const [currencyWant, setCurrencyWant] = useState(currencies[1].shortName);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyHave, currencyWant, amount);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Wymiana waluty</Legend>
        <Paragraph>Pole oznaczone * musi zostać wypełnione</Paragraph>
        <p>
          <label>
            <LabelText>
              wymiana z:
              <Span>(wybierz walutę)</Span>
            </LabelText>
            <Select
              value={currencyHave}
              onChange={({ target }) => setCurrencyHave(target.value)}
              name="currencyHave"
            >
              {currencies.map((currency) => (
                <option key={currency.shortName} value={currency.shortName}>
                  {currency.shortName}
                </option>
              ))}
            </Select>
          </label>
        </p>
        <p>
          <label>
            <LabelText>
              wymiana na:
              <Span>(wybierz walutę)</Span>
            </LabelText>
            <Select
              value={currencyWant}
              onChange={({ target }) => setCurrencyWant(target.value)}
              name="currencyWant"
            >
              {currencies.map((currency) => (
                <option key={currency.shortName} value={currency.shortName}>
                  {currency.shortName}
                </option>
              ))}
            </Select>
          </label>
        </p>
        <p>
          <label>
            <LabelText>Podaj kwotę*: </LabelText>
            <Field
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              name="value"
              type="number"
              required
              step="0.01"
            />
          </label>
        </p>
        <Button>przelicz</Button>
        <ShowResult result={result} />
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
