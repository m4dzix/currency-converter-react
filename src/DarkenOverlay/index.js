import React from 'react';
import './style.css'

const DarkenOverlay = ({children}) => (
  <DarkenOverlay className="div--darkenOverlay">
    {children}
  </DarkenOverlay>
);

export default DarkenOverlay;