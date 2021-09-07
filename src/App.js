import React, { useState } from 'react';
import './App.css';
import Dropdown from './container/Dropdown';


function App() {
  const[selected, setSelected] = useState()
  return (
    <div>
      <Dropdown selected={selected} setSelected={setSelected}/>
    </div>
  );
}

export default App;
