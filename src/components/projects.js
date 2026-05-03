import React from "react";

const projects = [
  {
    title: "To-Do App",
    type: "Productivity",
    description:
      "A modern task management application for adding, deleting, and organizing tasks with a clean responsive UI.",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Portfolio Website",
    type: "Personal Brand",
    description:
      "A responsive portfolio built with React, smooth UI sections, and project-focused presentation.",
    tech: ["React", "CSS", "JavaScript"],
  },
  {
    title: "Parking Allocation System",
    type: "Management System",
    description:
      "A slot management system for vehicle entries, parking availability, and structured database handling.",
    tech: ["Java", "MySQL", "PHP"],
  },
  {
    title: "Crime Record Management System",
    type: "Database App",
    description:
      "A secure application for storing, managing, and retrieving records with role-based access.",
    tech: ["PHP", "MySQL", "JavaScript"],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-heading">
        <span className="section-label">Selected work</span>
        <h2 className="section-title">My Projects</h2>
        <p>
          A few practical builds focused on responsive interfaces, useful logic,
          and real project structure.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <span className="project-number">0{index + 1}</span>
            <span className="project-type">{project.type}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="project-tech">
              {project.tech.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
