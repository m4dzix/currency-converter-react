import React from 'react';
import Form from './Form';
import Header from './Header';
import Section from './Section';

function App() {
  return (
  <div className="div--darkenOverlay">
    <div className="wrapper">
    <Header title= "kalkulator walutowy"/>
      <main className="main">
       <Form/>
       <Section/>
      </main>
    </div>
  </div>
  );
};

export default App;
