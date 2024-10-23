import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New state for username
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
        username, // Include username in the request
      });

      if (res.status === 201) {
        navigate("/books"); // Redirect to book search page after registration
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      setMessage("Registration failed.");
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // Handle username input
          placeholder="Username"
          className="border rounded p-2 w-full"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="border rounded p-2 w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Register
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
