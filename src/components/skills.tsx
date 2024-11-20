// import React from 'react'
// import "../app/styles/skills.css"
// import Heading from './heading'

// const Skills = () => {
//   return (
//     <div id='skills' className='skills-container'>
//          <Heading title="My Skills"/>
//         <div className='skills-grid'>
//             {/* first coloumn */}
//             <div className='skills-left' data-aos="zoom-in-up">
//                 <h2 className='skills-heading'>Technologies</h2>
//                 <p className='skills-text'>Lorem ipsum dolor sit amet consectetur
//                      adipisicing elit. Ad quasi, obcaecati
//                      corrupti voluptas soluta labore provident
//                       dolor quibusdam debitis voluptatibus?</p>

//             </div>
//             {/* second coloumn */}
//             <div className='skills-right'>
//                 <div className='skills-icons-grid'>
//                     <div className='skills-space'>
//                         <h2 data-aos="zoom-in-up">Next.js</h2>
//                         <h2 data-aos="zoom-in-up">Typescript</h2>
//                         <h2 data-aos="zoom-in-up">React.js</h2>

//                     </div>
//                     <div className='skills-space'>
//                         <h2 data-aos="zoom-in-up">Tailwind</h2>
//                         <h2 data-aos="zoom-in-up">CSS</h2>
//                         <h2 data-aos="zoom-in-up">Node.js</h2>

//                     </div>

//                 </div>
//             </div>

//         </div>

//     </div>
//   )
// }

// export default Skills
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "../app/styles/skills.css";
import Heading from "./heading";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Figma", icon: <FaFigma /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Heading title="Skills" />

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
