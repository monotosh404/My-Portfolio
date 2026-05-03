import React from "react";

const skills = [
  {
    name: "C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
  },
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
];

const focusAreas = [
  {
    title: "Frontend",
    text: "Responsive layouts, smooth UI interactions, and clean React components.",
  },
  {
    title: "Backend",
    text: "Growing stronger with logic, databases, APIs, and full-stack workflows.",
  },
  {
    title: "Learning",
    text: "Building projects regularly to turn concepts into working products.",
  },
];

function About() {
  return (
    <section id="about" className="about">
      <div className="about-heading">
        <span className="about-label">Get to know me</span>
        <h2 className="about-title">About Me</h2>
        <p>
          I like building interfaces that feel clear, responsive, and useful.
        </p>
      </div>

      <div className="about-container">
        <div className="about-left about-panel">
          <span className="panel-label">Profile</span>
          <h3>Crafting Modern Web Experiences with Passion and Precision</h3>

          <p>
            I am a third-year Computer Science student focused on becoming a
            Full-Stack Developer. I specialize in building responsive and
            high-performance interfaces using React.js and React Native.
          </p>

          <p>
            I enjoy turning ideas into real-world applications, improving my
            backend logic, and exploring how technology can solve meaningful
            problems.
          </p>

          <div className="about-stats">
            <div>
              <strong>3rd</strong>
              <span>Year CSE</span>
            </div>
            <div>
              <strong>9+</strong>
              <span>Skills</span>
            </div>
            <div>
              <strong>Full</strong>
              <span>Stack Goal</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-focus-grid">
            {focusAreas.map((item) => (
              <div className="card focus-card" key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="card journey-card">
            <span className="panel-label">Journey</span>
            <h4>Growth Journey</h4>
            <p>
              Continuously learning and building projects to bridge the gap
              between frontend and backend development.
            </p>
          </div>

          <div className="card skills-card">
            <span className="panel-label">Toolkit</span>
            <h4>Skills</h4>
            <div className="skills">
              {skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <img src={skill.icon} alt={`${skill.name} logo`} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
