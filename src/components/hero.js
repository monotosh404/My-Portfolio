import "./hero.css";
import profile from "../Picture/Image.jpg";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section className="hero">

      {/* LEFT */}
      <div className="hero-left">
        <p className="tag">Hello, I'm</p>

        <h1 className="name">
         <TypeAnimation
      sequence={[
        "MONOTOSH PRADHAN",
        1000,
        "",
        500
        
      ]}
      speed={50}
      repeat={Infinity}
       style={{ whiteSpace: "nowrap" }}
    />

        </h1>

        <h2 className="role">Frontend Developer</h2>

        <p className="desc">
          I build responsive and modern web applications using React.
        </p>

        <div className="buttons">
          <button className="btn primary">View Work</button>
          <button className="btn secondary">Download CV</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="glow"></div>
        <img src={profile} alt="profile" />
      </div>

    </section>
  );
}

export default Hero;
