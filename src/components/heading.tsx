import React from "react";
import "../app/styles/heading.css";

interface propsType {
  title: string;
}

const Heading: React.FC<propsType> = ({ title }) => {
  return (
    <div className="heading-container">
      <p className="heading-title" data-aos="zoom-in-up">
        {title}
      </p>
    </div>
  );
};

export default Heading;
