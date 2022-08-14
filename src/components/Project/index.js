import React from 'react';
// import projectList from "../../projects"
// import Barkr from "../../assets/Barker.png"
// import HOFDLA from "../../assets/HOFDLA.png"
// import README from "../../assets/README Generator.png"
// import SJ from "../../assets/studiojunk.gif"
// import CS from "../../assets/cs.png"
// import social from "../../assets/social.gif"

function Project(props) {
    return (
      <section className="container-xxl ">
        <div className="card bg-success mx-5 my-5" style={{width: "60rem", height:"40rem"}}>
          <img src={props.image} className="card-img-top" alt={props.title}></img>
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.category}</li>
            <li className="list-group-item">{props.tech}</li>
          </ul>
          <div className="card-body fw-bold text-uppercase ">
            <a href={props.url} className="card-link btn ">Working Site</a>
            <a href={props.live} className="card-link btn ">Live Site</a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Project;