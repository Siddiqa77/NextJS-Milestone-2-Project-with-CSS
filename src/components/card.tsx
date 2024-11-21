
"use client";

import React, { useEffect, useState } from "react";
import "../app/styles/card.css";
import Image from "next/image";

interface propsType {
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, description, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth >= 640);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  return (
    <div
      className={`card ${isSmallScreen ? "card-sm" : ""}`}
      data-aos="zoom-in-up"
    >
      <div>
        <Image
          className={`card-image ${isSmallScreen ? "card-image-sm" : ""}`}
          src={img}
          alt={title}
          width={350}
          height={350}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title} </div>
        <div>{description}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
