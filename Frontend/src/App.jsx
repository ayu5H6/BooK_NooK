<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import BookSearch from "./components/BookSearch";
import About from "./components/About";
import BookDetails from "./components/BookDetails"; // Import the BookDetails component
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
=======
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/books" element={<BookSearch />} />
          <Route path="/books/:bookId" element={<BookDetails />} />

          {/* Add this route */}
        </Routes>
      </div>
>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1
    </Router>
  );
}

export default App;
<<<<<<< HEAD
=======


>>>>>>> f44c18c2c63d02b5eb16d323a8461af4e28d51f1
