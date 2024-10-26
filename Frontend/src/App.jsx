import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useUser } from "./context/UserContext"; // Import the useUser hook
import Register from "./components/Register";
import Login from "./components/Login";
import BookSearch from "./components/BookSearch";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import Home from "./components/Home"; // Import Home component
import GenreSelectionPage from "./components/GenreSelectionPage"; // Import GenreSelectionPage component
import SearchResults from "./components/SearchResults";

function App() {
  const { userId, updateGenres } = useUser(); // Get userId and updateGenres from context

  const handleGenresSelected = (selectedGenres) => {
    console.log("Selected Genres:", selectedGenres);
    updateGenres(userId, selectedGenres); // Call the updateGenres function
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/select-genres"
            element={
              <GenreSelectionPage onGenresSelected={handleGenresSelected} />
            }
          />
          <Route path="/books" element={<BookSearch userId={userId} />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/books/:bookId" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
