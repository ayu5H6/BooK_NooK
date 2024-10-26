import React, { useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext"; // Import context
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const BookSearch = () => {
  const { selectedGenres } = useUser(); // Get selected genres from context
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const navigate = useNavigate(); // Use navigate for redirection

  const fetchRecommendedBooks = async () => {
    if (selectedGenres.length === 0) {
      setRecommendedBooks([]); // Clear books if no genres selected
      setLoading(false);
      return; // Exit if no genres selected
    }

    try {
      const promises = selectedGenres.map((genre) =>
        axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}`
        )
      );

      const results = await Promise.all(promises);
      const allBooks = results.flatMap((res) => res.data.items || []);
      setRecommendedBooks(allBooks);
    } catch (error) {
      console.error("Error fetching recommended books:", error);
      setError("Error fetching recommended books.");
    } finally {
      setLoading(false);
    }
  };

  const searchBooks = async () => {
    if (!searchTerm) return; // Exit if searchTerm is empty
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
      );
      setSearchResults(res.data.items || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Error fetching search results.");
    }
  };

  useEffect(() => {
    fetchRecommendedBooks(); // Fetch recommended books when genres change
  }, [selectedGenres]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-2xl font-semibold mb-4">Search for Books</h2>

      {/* Search Bar and Button */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
        <button
          onClick={searchBooks}
          className="bg-blue-600 text-white p-2 rounded ml-2 hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Display Search Results Header Only When There Are Results */}
      {searchResults.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-2">Search Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
            {searchResults.map((book) => (
              <div
                key={book.id}
                className="border rounded-lg p-4 shadow-lg cursor-pointer"
                onClick={() => navigate(`/books/${book.id}`)} // Navigate to BookDetails on click
              >
                {book.volumeInfo.imageLinks?.thumbnail && (
                  <img
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                    className="mb-2 rounded"
                  />
                )}
                <h3 className="font-bold">{book.volumeInfo.title}</h3>
                {book.volumeInfo.authors && (
                  <p className="text-gray-600">
                    Authors: {book.volumeInfo.authors.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      {/* Display Recommended Books */}
      <h2 className="text-2xl font-semibold mb-4">Recommended Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recommendedBooks.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-lg cursor-pointer"
            onClick={() => navigate(`/books/${book.id}`)} // Navigate to BookDetails on click
          >
            {book.volumeInfo.imageLinks?.thumbnail && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="mb-2 rounded"
              />
            )}
            <h3 className="font-bold">{book.volumeInfo.title}</h3>
            {book.volumeInfo.authors && (
              <p className="text-gray-600">
                Authors: {book.volumeInfo.authors.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
