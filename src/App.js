import React from 'react';
import './App.css';
//Chapter 1
import Chapter1 from './Chapter-1/Chapter1'
// chapter 2
import Game from './game-quiz/Game';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Chapter 1</h1>
     <Chapter1/>
      </div>
      <div>
        <h2>Chapter 2 - Quiz Game</h2>
        <Game/>
      </div>
    </div>
  );
}

export default App;
