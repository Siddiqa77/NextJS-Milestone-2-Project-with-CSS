"use client"

import React, { useState } from 'react';
import '../app/styles/certificate.css';
import Image from 'next/image';
import Heading from './heading';

const certificates = [
  {
    id: 0,
    title: 'HTML Certificate',
    img: '/C1.jpg',
    description: 'Techforce Pakistan - HTML Completion Certification',
  },
  {
    id: 1,
    title: 'CSS Certificate',
    img: '/C2.jpg',
    description: 'Techforce Pakistan - CSS Completion Certification',
  },
  {
    id: 2,
    title: 'JavaScript Certificate',
    img: '/C3.png',
    description: 'Techforce Pakistan - JS Completion Certification',
  },
  {
    id: 3,
    title: 'Frontend Internship 01',
    img: '/C5.png',
    description: 'First Internship Completion Certification',
  },
  {
    id: 4,
    title: 'Frontend Internship 02',
    img: '/C6.png',
    description: 'Second Internship Completion Certification',
  },
  {
    id: 5,
    title: 'Typescript Certificates',
    img: '/C6.jpg',
    description: 'Typescript Exam Preparation Certification',
  },
  {
    id: 6,
    title: 'UI/UX Design',
    img: '/C7.png',
    description: 'Live Session completion Certification',
  },
  {
    id: 7,
    title: 'Bootcamp Certificate',
    img: '/C8.png',
    description: 'Frontend Bootcamp Completion  Certification',
  }
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div id="certificates" className="certificate-container">
     <Heading title="Certificates" />
      <div className="certificate-grid">
        {certificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <Image
              src={cert.img}
              alt={cert.title}
              width={300}
              height={200}
              className="certificate-image"
              onClick={() => openLightbox(cert.img)}
            />
            <h3 className="certificate-title">{cert.title}</h3>
            <p className="certificate-description">{cert.description}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <Image src={selectedImage} alt="Certificate" width={800} height={1000} className="lightbox-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;
