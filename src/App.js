import React, {useState} from 'react';
import Form from './Form';
import Header from './Header';
import Section from './Section';
import Main from './Main'
import Wrapper from './Wrapper';
import currencies from "./Form/currencies";



function App() {

  const [result, setResult] = useState();
  const calculateResult = (currencyHave, currencyWant, amount) => {

    const currencyHaveRate = currencies.find
      (({ shortName }) => shortName === currencyHave).rate;

    const currencyWantRate = currencies.find
      (({ shortName }) => shortName === currencyWant).rate;

    setResult({
      sourceAmount: +amount,
      currencyHave,
      targetAmount: (amount * currencyHaveRate)/currencyWantRate,
      currencyWant,
  });
  };
  
  return (
    <Wrapper>
      <Header title= "kalkulator walutowy"/>
        <Main>
        <Form
           result = {result}
           calculateResult = {calculateResult}
        />
          <Section/>
        </Main>
    </Wrapper>
  );
};

export default App;
