import React from 'react';
import coverImage from '../../assets/anjuli.jpg';


function About() {

  return (
    <div className="container text-center my-5">
      <div className="row align-items-start">
        <div className="col-6 mx-2">
        <h2 className="about mb-5"id="about"> WOC Front-End Developer+Social Impact Driven+Dog Enthusiast</h2>
        <img id= "img" src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover" />
        </div>
    <div className="bio col-4 mx-2" id="bio">
      <p>
        Hello — My name is Anjuli Garcia. I am an aspiring software developer, with a preference in front-end development and design, and a knack for helping purpose-driven businesses. I would like to dedicate my skills to companies who have a passion for helping people and the planet.I've combine my passions for social impact, code and creativity into my current freelance hobby, Studio Junk. I believe championing impact driven brands will level up our communities and our planet. In the meantime, I enjoy going to the movies, hanging with my dog Elton John, and eating good ole saucy pizza.
        If my aspirations and skills resonate with you, feel free to contact me. I hope you liked the preview!
      </p>
    </div>
  </div>
  </div>
  );
}

export default About;