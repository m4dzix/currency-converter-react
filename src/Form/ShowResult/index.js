import React from "react";
import { Paragraph} from "./styled"
 

 const ShowResult = ({result}) => (

  <Paragraph>
   {result !== undefined && (
    <>
      {result.sourceAmount.toFixed(2)}&nbsp;{result.currencyHave}&nbsp;= {""}
      {result.targetAmount.toFixed(2)}&nbsp;{result.currencyWant}&nbsp;
    </>
   )}
  </Paragraph>
 );

 export default ShowResult;