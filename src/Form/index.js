import React, { useState } from "react";
import {
  StyledForm,
  Paragraph,
  LabelText,
  Span,
  Select,
  Button,
  Fieldset,
  Legend,
  Information,
} from "./styled";
import ShowResult from "./ShowResult";
import { useRates } from "../useRates";

const Form = () => {
  const { rates } = useRates();
  const currencyApiArray = Object.keys(useRates().rates);
  const [amount, setAmount] = useState("");
  const [currencyHave, setCurrencyHave] = useState("PLN");
  const [currencyWant, setCurrencyWant] = useState("EUR");

  const [result, setResult] = useState();

  const calculateResult = (currencyHave, currencyWant, amount) => {
    setResult({
      sourceAmount: +amount,
      currencyHave,
      targetAmount: (amount * rates[currencyWant]) / rates[currencyHave],
      currencyWant,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyHave, currencyWant, amount);
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      <Fieldset>
        <Legend>Wymiana waluty</Legend>

        {rates ? (
          <>
            <Paragraph>Pole oznaczone * musi zostać wypełnione</Paragraph>
            <p>
              <label>
                <LabelText>
                  wymiana z:
                  <Span> (wybierz walutę)</Span>
                </LabelText>
                <Select
                  value={currencyHave}
                  onChange={({ target }) => setCurrencyHave(target.value)}
                  name="currencyHave"
                >
                  {currencyApiArray.map((currencyApiArray) => (
                    <option key={currencyApiArray} value={currencyApiArray}>
                      {currencyApiArray}
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
                  {currencyApiArray.map((currencyApiArray) => (
                    <option key={currencyApiArray} value={currencyApiArray}>
                      {currencyApiArray}
                    </option>
                  ))}
                </Select>
              </label>
            </p>
            <p>
              <label>
                <LabelText>Podaj kwotę*: </LabelText>
                <Select
                  as="input"
                  value={amount}
                  onChange={({ target }) => setAmount(target.value)}
                  name="value"
                  type="number"
                  required
                  step="0.01"
                ></Select>
              </label>
            </p>
            <Button>przelicz</Button>
            <ShowResult result={result} />
          </>
        ) : (
          <Information>
            {rates === "error"
              ? "Ojojoj... wygląda na to, że wystapił błąd, chyba masz problem z internetem, jeśli nie - spróbuj później"
              : "Poczekaj chwilkę, ładujemy teraz dane z Europejskiego Banku Centralnego "}
          </Information>
        )}
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
