import React from "react";
// import tedxvjitlogo from "../images/Tedxvjit.png";
const Footer = ({ onSectionChange }) => {
  return (
    <footer className="relative bg-black   text-white py-5">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between px-5">
        {/* Left Section - Logo and Links */}
        <div className="flex flex-col items-start md:w-1/3 mb-5 md:mb-0">
          <img
            src="/primary/Tedxvjit.png"
            alt="TEDxVJIT Logo"
            className="max-w-[150px] mb-2"
          />
          <ul className="list-none p-0">
            <li
              onClick={() => onSectionChange("team")}
              className="cursor-pointer text-gray-400 hover:text-red-600 mb-2"
            >
              Team
            </li>
            <li className="text-gray-400 hover:text-red-600">
              About Us
            </li>
          </ul>
        </div>

        {/* Middle Section - Social Links */}
        <div className="flex flex-col items-start md:w-1/3 mb-5 md:mb-0">
          <h3 className="text-xl mb-2">
            Let's <span className="text-red-600">Connect</span>
          </h3>
          <ul className="list-none p-0">
            <li className="flex items-center text-gray-400 hover:text-red-600 mb-2">
              <i className="fab fa-youtube mr-2"></i> Youtube
            </li>
            <li className="flex items-center text-gray-400 hover:text-blue-600 mb-2">
              <i className="fab fa-linkedin mr-2"></i> Linkedin
            </li>
            <li className="flex items-center text-gray-400 hover:text-pink-600 mb-2">
              <i className="fab fa-instagram mr-2"></i> Instagram
            </li>
            <li className="flex items-center text-gray-400 hover:text-blue-400">
              <i className="fab fa-twitter mr-2"></i> Twitter
            </li>
          </ul>
        </div>

        {/* Right Section - Contact Info */}
        <div className="flex flex-col items-start md:w-1/3">
          <h3 className="text-xl mb-2">Contact Us</h3>
          <p className="flex items-center text-gray-400 hover:text-red-600 mb-2">
            <i className="fas fa-envelope mr-2"></i> tedxvjit@vjit.ac.in
          </p>
          <p className="flex items-center text-gray-400 hover:text-red-600 mb-2">
            <i className="fas fa-phone mr-2"></i> +91 9866487922
          </p>
          <p className="flex items-center text-gray-400 hover:text-red-600 mb-2">
            <i className="fas fa-phone mr-2"></i> +91 8121403233
          </p>
          <p className="flex items-center text-gray-400 hover:text-red-600">
            <i className="fas fa-phone mr-2"></i> +91 8106993270
          </p>
        </div>
      </div>

      <div className="text-red-600 text-center mt-5">
        <p>Copyright © 2024 - TEDxVJIT. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
