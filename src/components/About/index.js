import React from 'react';
// import About from '../components/About/index.js';
// import coverImage from './assets/anjuli.jpg';


function About() {

  return (
    <section className="my-5">
    <h1 id="about"> Early WOC Front-End Developer <br>Social Impact Driven</br> <br>Dog Enthusiast</br></h1>
    <img id= "img" src="" className="my-2" style={{ width: "50%" }} alt="cover" />
    <div className="my-2 bio">
      <p>
        Hello — My name is Anjuli Garcia. I am an aspiring software developer, with a preference in front-end development and design, and a knack for helping purpose-driven businesses. I would like to dedicate my skills to companies who have a passion for helping people and the planet. I've combine my passions for social impact, code and creativity into my current freelance hobby, Studio Junk. I believe championing impact driven brands will level up our communities and our planet. In the meantime, I enjoy going to the movies, hanging with my dog Elton John, and eating good ole saucy pizza.
        If my aspirations and skills resonate with you, feel free to contact me. I hope you liked the preview!
      </p>
    </div>
  </section>
  );
}

export default About;