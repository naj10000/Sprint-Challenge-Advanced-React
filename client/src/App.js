import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header>Women's World Cup</header>
      <NavBar/>
      <Players/>
    </div>
  );
}

export default App;
