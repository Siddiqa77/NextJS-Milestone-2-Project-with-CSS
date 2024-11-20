import React from "react";
import "../app/styles/footer.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; 2024 Siddiqa Badar. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <ul className="social-icons">
            <Link href="https://www.linkedin.com/in/siddiqa-badar-49a5692b5/">
              <FaLinkedin className="social-icon" />
            </Link>

            <Link href="https://github.com/Siddiqa77">
              <FaGithub className="social-icon" />
            </Link>

            <Link href="https://www.facebook.com/">
              <FaFacebook className="social-icon" />{" "}
            </Link>

            <Link href="https://www.instagram.com/siddiqa778899/?hl=en">
              <FaInstagram className="social-icon" />
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
