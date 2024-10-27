// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-2xl font-bold flex ">
          <Link to="/">BookNook</Link>
        </h1>
        <ul className="flex space-x-4">
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
