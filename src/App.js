import React from 'react';
import Form from './Form';
import Header from './Header';
import Section from './Section';
import Main from './Main'
import Wrapper from './Wrapper';
import Body from './Body';


function App() {
  return (
  <Body>
    <Wrapper>
      <Header title= "kalkulator walutowy"/>
        <Main>
          <Form/>
          <Section/>
        </Main>
    </Wrapper>
  </Body>
  );
};

export default App;
