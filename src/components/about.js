import React from "react";

function About() {
  return (
    <section id="about" className="about">

      <h2 className="about-title">About Me</h2>

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h3>
            Crafting Modern Web Experiences with Passion & Precision
          </h3>

          <p>
            I’m a third-year Computer Science student focused on becoming a 
            Full-Stack Developer. Currently, I specialize in building responsive 
            and high-performance interfaces using React.js and React Native.
          </p>

          <p>
            I enjoy turning ideas into real-world applications, constantly 
            improving my backend logic, and exploring how technology can solve 
            meaningful problems.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="card">
            <h4>🚀 Growth Journey</h4>
            <p>
              Continuously learning and building projects to bridge the gap 
              between frontend and backend development.
            </p>
          </div>

          <div className="card">
            <h4>💻 Skills</h4>
            <div className="skills">
              <span>C</span>
              <span>C++</span>
              <span>Java</span>
              <span>PHP</span>
              <span>MySQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;