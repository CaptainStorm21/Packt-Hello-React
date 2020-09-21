import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter'
import Login from './Login';
import Address from './Address'
import Conditional from './Conditional';

function Chapter1() {
  return (
    <div className="App">
      <Greeting name = "Alpha"/>
      <Counter bookTitle = "Man on the Moon"/>
      <Login/>
      <Address />
      <Conditional/>
    </div>
  );
}

export default Chapter1;