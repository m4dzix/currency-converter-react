import React from "react";


 const ShowResult = ({result}) => (

  <p className="form__result ">
   {result !== undefined && (
    <>
      {result.sourceAmount.toFixed(2)}&nbsp;{result.currencyHave}&nbsp;=&nbsp;
      {result.targetAmount.toFixed(2)}&nbsp;{result.currencyWant}&nbsp;
    </>
   )}
  </p>
 );

 export default ShowResult;