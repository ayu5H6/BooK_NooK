import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1
          >
            Login
          </Link>
          <Link
            to="/register"
<<<<<<< HEAD
            className="px-6 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg"
=======
            className="bg-green-600 text-white p-3 rounded-lg mx-2 hover:bg-green-700 transition duration-300"
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
