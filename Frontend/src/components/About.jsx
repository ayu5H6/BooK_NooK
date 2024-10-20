import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">
          Welcome to Book Nook!
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Book Nook is your go-to platform to discover, review, and recommend
          books. Create your profile, search for your favorite books, leave
          reviews, and explore recommendations tailored to your reading
          preferences.
        </p>
        <p className="text-gray-700 text-lg mb-6">
          Join our community of book enthusiasts and share your reading
          experiences with others!
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/login"
            className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
