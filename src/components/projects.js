import React from "react";

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2 className="section-title">My Projects</h2>

      <div className="projects-grid">

        {/* PROJECT 1 */}
        <div className="project-card">
          <h3>To-Do App</h3>
          <p>
            A modern task management application built with React, allowing users
            to add, delete, and manage tasks with a clean and responsive UI.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

        
        </div>

        {/* PROJECT 2 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            A modern personal portfolio built using React with responsive design
            and smooth UI animations to showcase projects and skills.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>

          
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <h3>Parking Allocation System</h3>
          <p>
            A system designed to efficiently manage parking slots, track vehicle
            entries, and optimize space utilization using structured logic and database handling.
          </p>

          <div className="project-tech">
            <span>Java</span>
            <span>MySQL</span>
            <span>PHP</span>
          </div>

       
        </div>

        {/* PROJECT 4 */}
        <div className="project-card">
          <h3>Crime Record Management System</h3>
          <p>
            A secure application for storing, managing, and retrieving crime records
            with role-based access and efficient database operations.
          </p>

          <div className="project-tech">
            <span>PHP</span>
            <span>MySQL</span>
            <span>JavaScript</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;