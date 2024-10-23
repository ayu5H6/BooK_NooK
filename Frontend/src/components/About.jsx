import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-4xl font-bold my-4">Welcome to Book Nook</h1>
      <p className="my-4">
        Discover books, read descriptions, leave reviews, and create your
        reading profile. Book Nook is the place to find your next favorite read!
      </p>
      <div className="mt-8">
        <Link to="/login" className="bg-blue-500 text-white p-2 rounded mx-2">
          Login
        </Link>
        <Link
          to="/register"
          className="bg-green-500 text-white p-2 rounded mx-2"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default About;
