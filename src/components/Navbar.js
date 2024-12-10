// src/components/Navbar.js
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="Pro">
      <FaUserCircle size={30} className="text-white" />
      <h1 className="text-xl font-bold name">Ritheesh Reddy Kumbham</h1>
      </div>
      
      <ul className="nav-links flex gap-6">
        <li>
          <a href="#about" className="hover:underline">About</a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">Projects</a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
