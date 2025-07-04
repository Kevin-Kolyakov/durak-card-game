import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameUI from './DurakClient';

function App() {
  return (
    <div className="App">
      <h1>Durak</h1>
      <GameUI />
    </div>
  );
}

export default App
