

import React from 'react';
import "../styles/about.css"
import Image from 'next/image';


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-description">
            Hi, I&apos;m Siddiqa Badar, a passionate frontend developer and graphic designer. 
            With expertise in HTML, CSS, JavaScript, and modern frameworks like React and Next.js, Figma 
            I specialize in creating responsive and visually appealing websites. 
            Additionally, I have a strong command over graphic tools like Adobe Photoshop and Illustrator, 
            allowing me to bring creativity to every project. 
            I&apos;m currently exploring Web3.0 and AI technologies to expand my skill set further.
          </p>
          <a href="Cv.pdf.pdf" className="about-button">Explore My CV</a>
        </div>
        <div className="about-image">
          <Image src="/pic.png"
           alt="Siddiqa Badar"
           width={350} 
           height={350}/>
        </div>
      </div>
    </section>
  );
};

export default About;
