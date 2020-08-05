import React from 'react';
import Form from './Form';
import Header from './Header';
import Section from './Section';
import Main from './Main'
import Wrapper from './Wrapper';
import Body from './Body';
import DarkenOverlay from './DarkenOverlay';

function App() {
  return (
  <Body>
  <DarkenOverlay>
    <Wrapper>
      <Header title= "kalkulator walutowy"/>
        <Main>
          <Form/>
          <Section/>
        </Main>
    </Wrapper>
  </DarkenOverlay>
  </Body>
  );
};

export default App;
