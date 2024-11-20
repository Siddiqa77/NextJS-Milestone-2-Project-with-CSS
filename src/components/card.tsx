import React from "react";
import "../app/styles/card.css";
import Image from "next/image";

interface propsType {
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, description, img, tags }) => {
  return (
    <div
      className={`card ${window.innerWidth >= 640 ? "card-sm" : ""}`}
      data-aos="zoom-in-up"
    >
      <div>
        <Image
          className={`card-image ${
            window.innerWidth >= 640 ? "card-image-sm" : ""
          }`}
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
