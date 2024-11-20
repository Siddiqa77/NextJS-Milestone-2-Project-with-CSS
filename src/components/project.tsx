import React from "react";
import "../app/styles/project.css";
import Heading from "./heading";
import Card from "./card";

const data = [
  {
    id: 0,
    title: "Ecommerce Website",
    description:
      "This is a ZULU Shoes Ecommerce website created by HTML, CSS and JS with some component libraries for better user experience and styling.",
    img: "/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 1,
    title: "Wedding Website",
    description:
      "This is a Wedding Planner website created by HTML, CSS and JS with some component libraries for better user experience and styling.",
    img: "/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    title: "Techforce Pakistan Website",
    description:
      "This is a Techforce Pakistan website created by HTML, CSS and JS with some component libraries for better user experience and styling.",
    img: "/project3.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    id: 3,
    title: "Image Gallery",
    description:
      "This is a Image Gallery created by HTML, CSS and JS given by Internship project with some component libraries for better user experience and styling.",
    img: "/project4.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "React Portfolio",
    description:
      "This is a Personal Portfolio  website created by HTML, CSS, React and TS with some component libraries for better user experience and styling.",
    img: "/project5.png",
    tags: ["React", "HTML", "CSS", "Typescript"],
  },
  {
    id: 5,
    title: "Resume Builder",
    description:
      "This is a Resume Builder  created by HTML, CSS and TS with some component libraries for better user experience and styling.",
    img: "/project6.png",
    tags: ["HTML", "Node", "CSS", "Typescript"],
  },
];

const Project = () => {
  return (
    <div id="project" className="projects-container">
      <Heading title="My Projects" />
      <div className="projects-grid projects-grid-xl projects-grid-md-2 projects-grid-lg-3 projects-center">
        {data.map((el) => (
          <Card
            key={el.id}
            title={el.title}
            description={el.description}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
