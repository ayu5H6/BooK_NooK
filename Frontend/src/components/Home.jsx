// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Book Nook</h1>
        <p className="text-lg mb-6">
          Select your favorite genres to get personalized book recommendations!
        </p>
        <Link
          to="/select-genres"
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Select Genres
        </Link>
      </div>
    </div>
  );
};

export default Home;
