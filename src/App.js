import React from 'react';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Services from './Components/Services'
import Portfolio from './Components/portfolio'
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
