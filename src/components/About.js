import React from "react";
import "./About.css"
const About = () => {
  return (
    <section id="about" className="p-8 bg-gradient-to-r from-blue-400 via-green-400 to-purple-500 text-white">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <p className="mt-4 text-center max-w-2xl mx-auto">
        I'm a final-year Electronics and Communication Engineering student with a passion for web
        development. Proficient in React.js, Node.js, and creating interactive, responsive
        applications. Let's build something amazing together!
      </p>

      <div className="mt-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Skills</h3>
        <div className="skills-grid">
          <div className="skill-item">React.js</div>
          <div className="skill-item">Node.js</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">Python</div>
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">Bootstrap</div>
          <div className="skill-item">SQL</div>
        </div>
      </div>

      <div className="mt-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Latest Education</h3>
        <p className="text-center">
          Currently pursuing Bachelor of Technology in Electronics and Communication Engineering at
          St. Peter's Engineering College, Hyderabad (2021 - 2025).
        </p>
      </div>
    </section>
  );
};

export default About;
