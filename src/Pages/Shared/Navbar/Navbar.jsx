import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-lg">
          TAsk Management System
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Add Task
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
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
        <a href="#" className="block text-white py-2 hover:text-gray-300">
          Home
        </a>
        <a href="#" className="block text-white py-2 hover:text-gray-300">
          AddTask
        </a>
        <a href="#" className="block text-white py-2 hover:text-gray-300">
          About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
