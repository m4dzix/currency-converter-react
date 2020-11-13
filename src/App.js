import React from "react";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Main from "./Main";
import Wrapper from "./Wrapper";
function App() {
  return (
    <Wrapper>
      <Header title="kalkulator walutowy" />
      <Main>
        <Form />
        <Section />
      </Main>
    </Wrapper>
  );
}

export default App;
