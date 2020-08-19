import React, { useState } from "react";
import "./style.css";
import ShowDate from "./ShowDate"
import currencies from "./currencies";
import ShowResult from "./ShowResult";

const Form = ({ calculateResult ,result }) => {

  const [currencyHave, setCurrencyHave] = useState(currencies[0].shortName);
  const [currencyWant, setCurrencyWant] = useState(currencies[1].shortName);
  const [amount, setAmount] = useState(""); 

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currencyHave, currencyWant, amount)
  };


  return( 

  <form className="form" onSubmit={onSubmit}>
  <fieldset className="form__fieldset">
  <ShowDate/>
    <legend className="form__legend">
      Wymiana waluty
    </legend>
    <p className=" form__paragraph">Pole oznaczone * musi zostać wypełnione</p>
    <p><label>
      <span className="form__labelText">wymiana z: 
        <span className="form__span">(wybierz walutę)</span>
      </span>
      <select
        value={currencyHave}
        onChange = {( {target} ) => setCurrencyHave(target.value)}
        className= "form__select"
        name="currencyHave"
      >
        {currencies.map(currency =>(
          <option
            key={currency.shortName}
            value={currency.shortName}
          >
            {currency.shortName}
          </option>))}
      </select>
      </label></p>
      <p><label>
      <span className="form__labelText">wymiana na: 
        <span className="form__span">(wybierz walutę)</span>
      </span>
      <select
        value={currencyWant}
        onChange = {( {target} ) => setCurrencyWant(target.value)}
        className="form__select "
        name="currencyWant"
      >
        {currencies.map(currency =>(
          <option
            key={currency.shortName}
            value={currency.shortName}
          >
          {currency.shortName}
          </option>))}
      </select>
      </label></p>
    <p><label>
    <span className="form__labelText">Podaj kwotę*: </span>
    <input 
      value={amount}
      onChange={({target})=> setAmount(target.value)}
      className="form__field"
      name="value" 
      type="number" 
      required step="0.01"/>
    </label></p>
    <button className="form__button">przelicz</button>
    <ShowResult result = {result} />
  </fieldset>
</form>

);
};

export default Form;