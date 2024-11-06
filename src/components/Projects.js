import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "WeatherApp",
      description: "A simple weather application built with HTML, CSS, and JavaScript that fetches real-time weather data using a weather API. Get current weather updates for any location!",
      link: "https://github.com/MAHMADTAHIR/WeatherApp",
    },
    {
      title: "ColorSpark",
      description: "A simple Color Palette Generator using HTML, CSS, and JavaScript. Instantly create and copy custom color schemes for design projects.",
      link: "https://github.com/MAHMADTAHIR/ColorSpark",
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
