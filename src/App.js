import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div className="div--darkenOverlay">
    <div className="wrapper">
      <header className="header">
        <h1 className="header__title">kalkulator walutowy</h1>
      </header>
      <main className="main">
        <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">
              Wymiana waluty
            </legend>
            <p className=" form__paragraph">Pole oznaczone * musi zostać wypełnione</p>
            <p><label><span className="form__labelText">wymiana z: <span className="form__span">(wybierz
                    walutę)</span></span><select className="form__select " name="currencyHave">
                  <option value="PLN">PLN</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="CHF">CHF</option>
                </select>
              </label></p>
            <p><label><span className="form__labelText">wymiana na: <span className="form__span">(wybierz
                    walutę)</span></span><select className="form__select " name="currencyWant">
                  <option value="EUR">EUR</option>
                  <option value="PLN">PLN</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="CHF">CHF</option>
                </select>
              </label></p>
            <p><label><span className="form__labelText">Podaj kwotę*: </span><input className="form__field"
                  name="value" type="number" required step="0.01"/></label></p>
            <button className="form__button">przelicz</button>
            <p className="form__result "></p>
          </fieldset>
        </form>
        <section className="section">
          <p className="section__paragraph">Kursy walut pochodzą ze strony : <a className="section__link"
              href="https://internetowykantor.pl/kursy-walut/" target="_blank" rel="noreferrer noopener">
              "internetowykantor.pl"</a> z dnia 7 lipca 2020<span className="link__span">(otworzy się w nowej karcie &#128521)</span></p>
        </section>
      </main>
    </div>
  </div>
  );
}

export default App;
