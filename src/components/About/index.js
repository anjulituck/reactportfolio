import React from 'react';
import About from './components/About';
import coverImage from './assets/anjuli.jpg';
import './index.css';

function App() {

  return (
    <section className="my-5">
    <h1 id="about"> Early WOC Front-End Developer <br>Social Impact Driven</br> <br>Dog Enthusiast</br></h1>
    <img id= "img" src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
    <div className="my-2">
      <p>
        Hello — My name is Anjuli Garcia 
      </p>
    </div>
  </section>
  );
}

export default App;