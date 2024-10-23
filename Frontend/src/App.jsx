import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import BookSearch from "./components/BookSearch";
import About from "./components/About";
import BookDetails from "./components/BookDetails"; // Import the BookDetails component

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;


