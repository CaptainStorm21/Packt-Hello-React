import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter'
import Login from './Login';
import Address from './Address'

function App() {
  return (
    <div className="App">
      <Greeting name = "Alpha"/>
      <Counter bookTitle = "Man on the Moon"/>
      <Login/>
      <Address />
    </div>
  );
}

export default App;
