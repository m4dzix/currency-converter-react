import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";
import Wrapper from "./Wrapper";
import { useRates } from "./useRates";
function App() {
  const [result, setResult] = useState();
  const { rates } = useRates();
  const calculateResult = (currencyHave, currencyWant, amount) => {
    setResult({
      sourceAmount: +amount,
      currencyHave,
      targetAmount: (amount * rates[currencyWant]) / rates[currencyHave],
      currencyWant,
    });
  };

  return (
    <Wrapper>
      <Header title="kalkulator walutowy" />
      <Main>
        <Form result={result} calculateResult={calculateResult} />
        <Section />
      </Main>
    </Wrapper>
  );
}

export default App;
