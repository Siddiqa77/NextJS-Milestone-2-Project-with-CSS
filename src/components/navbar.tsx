import React from "react";
import "../app/styles/navbar.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <a href="Cv.pdf.pdf" className="logo" data-aos="zoom-in-right">
        Siddiqa Badar
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/#project">
          <li>Project</li>
        </Link>
        <Link href="/#skills">
          <li>Skills</li>
        </Link>
        <Link href="/#certificates">
          <li>Certificates</li>
        </Link>
      </ul>
    </header>
  );
};

export default Navbar;
