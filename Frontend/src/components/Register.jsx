import React, { useState } from "react";
import axios from "axios";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
  const [message, setMessage] = useState("");
=======
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
<<<<<<< HEAD
      });

      if (res && res.data) {
        setMessage(res.data.message); // Set success message from response
      } else {
        setMessage("An unexpected error occurred. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setMessage(err.response.data.message); // Set error message from response
      } else {
        setMessage("An error occurred. Please check your connection.");
      }
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Create Your Account</h2>
        {message && <p className="text-red-500">{message}</p>}{" "}
        {/* Display message */}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg">
            Register
          </button>
        </form>
=======
        username,
      });

      if (res.status === 201) {
        navigate("/books");
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      setMessage("Registration failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="border rounded p-2 w-full mb-4"
            required
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border rounded p-2 w-full mb-4"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border rounded p-2 w-full mb-4"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border rounded p-2 w-full mb-4"
            required
          />
          <button
            type="submit"
            className="bg-teal-600 text-white p-2 rounded w-full hover:bg-teal-700 transition duration-300"
          >
            Register
          </button>
        </form>
        {message && <p className="text-red-500 text-center mt-2">{message}</p>}
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1
      </div>
    </div>
  );
};

export default Register;
