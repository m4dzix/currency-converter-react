import React from 'react';
import { StyledMain } from "./styled"
import ShowDate from "./ShowDate"

const Main = ({children}) => (
  <StyledMain>
    <ShowDate/>
    {children}
  </StyledMain>
)

export default Main