import React from "react";
import './About.css';

function About() {
    return (
      <><section id='about'>
        <div className="aboutme-container">
          <div className='aboutme'>
              <p>I am a skilled and driven developer looking to create experiences to improve people's lives and to make them fun. My experience involves Ruby on Rails, Node.js, and others. </p> 
            </div>
          </div>
          <ul>
            <div className="skills-container skills">
              <h3>Other skills</h3>  
              <li>Full-time cat parent</li>
              <li>Part-time farmer</li>
              <li>3-D Printer enthusiast</li>
            </div>
          </ul>
      </section></>
    );
  }
  
  export default About;