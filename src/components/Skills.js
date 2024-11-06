import React from "react";

const Skills = () => {
  const skills = ["React", "Node.js", "MongoDB", "JavaScript", "HTML", "CSS"];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
