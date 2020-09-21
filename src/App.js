import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter'

function App() {
  return (
    <div className="App">
      <Greeting name = "Alpha"/>
      <Counter bookTitle = "Man on the Moon"/>
    </div>
  );
}

export default App;
