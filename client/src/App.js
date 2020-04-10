import React from 'react';
import logo from './logo.svg';
import './App.css';
import Players from './components/Players';
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      
      </header> */}
      <NavBar/>
      <Players/>
    </div>
  );
}

export default App;
