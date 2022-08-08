import React from 'react';
import Nav from './components/Navigation/index.js';
import About from './components/About/index.js';
import Portfolio from './components/Portfolio/index.js';
import Resume from './components/Resume/index.js';
import Contact from './components/Contact/index.js'
import Footer from './components/Footer/index.js';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
      </header>
      <div className="sections">
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
