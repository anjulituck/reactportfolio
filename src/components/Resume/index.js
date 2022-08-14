import React from 'react';
import resume from "../../assets/resume.png"

function Resume() {
    return (
      <section className="resume container-sm v-stack" id="resume">
        <h2 className="text-center"> Resume</h2>
        <img src={resume} className="img-fluid rounded my-5" style={{width:"50rem", height:"100rem"}}alt="Anjuli Garcia's Portfolio"></img>
        <a className="btn btn-success btn-lg text-uppercase fw-bold" style={{width:"60%"}}href={resume} download rel="noopener noreferrer" target="_blank" role="button">Download Resume</a>
      </section>
    );
  }
  
  export default Resume;
  