import React from 'react';
import './style.css'
import ShowDate from "./ShowDate"

const Main = ({children}) => (
  <main className="main">
     <ShowDate/>
    {children}
  </main>
)

export default Main