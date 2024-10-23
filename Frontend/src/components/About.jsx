import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Book Nook</h1>
        <p className="text-lg mb-6">
          Discover books, read descriptions, leave reviews, and create your
          reading profile. Book Nook is the place to find your next favorite
          read!
        </p>
        <div className="mt-8">
          <Link
            to="/login"
            className="bg-blue-600 text-white p-3 rounded-lg mx-2 hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-600 text-white p-3 rounded-lg mx-2 hover:bg-green-700 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
