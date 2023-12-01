import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">
          Task Management System
        </div>

        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/addtask" className="text-white hover:text-gray-300">
            AddTask
          </NavLink>
          <NavLink to="/about" className="text-white hover:text-gray-300">
            About
          </NavLink>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => {
              const navLinks = document.getElementById("responsive-nav-links");
              navLinks.classList.toggle("hidden");
            }}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div id="responsive-nav-links" className="md:hidden mt-2 hidden">
        <NavLink to="/" className="text-white hover:text-gray-300">
          Home
        </NavLink>
        <NavLink to="/addtask" className="text-white hover:text-gray-300">
          AddTask
        </NavLink>
        <NavLink to="/about" className="text-white hover:text-gray-300">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
