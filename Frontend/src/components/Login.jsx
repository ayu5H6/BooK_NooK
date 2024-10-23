import React, { useState } from "react";
import axios from "axios";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD
=======
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
<<<<<<< HEAD
      console.log(res.data); // You can handle the login response here
    } catch (err) {
      console.error("Login failed:", err.response.data);
=======

      if (res.status === 200) {
        navigate("/books");
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      setMessage("Login failed. Please check your credentials.");
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1
    }
  };

  return (
<<<<<<< HEAD
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Login to Your Account</h2>
        <form onSubmit={handleLogin}>
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
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
            Login
          </button>
        </form>
=======
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin}>
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
            className="bg-blue-600 text-white p-2 rounded w-full hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        {message && <p className="text-red-500 text-center mt-2">{message}</p>}
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1
      </div>
    </div>
  );
};

export default Login;
