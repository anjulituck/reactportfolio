import React from 'react';
import Project from "../Project"
import projects from "../../projects"

function Portfolio() {
    return (
      <section className="portfolio container" id="portfolio">
        <h2>Projects</h2>
        {projects.map((project)=> (
        <Project>
          key={project.id}
          id={project.id}
          name={project.name}
          category={project.category}
          description={project.description}
          image={project.image}
          tech={project.tech}
          url={project.url}
        </Project>
        ))}
      </section>
    );
  }
  
  export default Portfolio;
  