import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [randomBooks, setRandomBooks] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      if (res.data.items) {
        setBooks(res.data.items);
        setMessage("");
      } else {
        setMessage("No books found.");
      }
    } catch (err) {
      setMessage("Error fetching books. Please try again.");
    }
  };

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
  };

  useEffect(() => {
    const fetchRandomBooks = async () => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=fiction"
        );
        const items = res.data.items;
        const randomSelection = items
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
        setRandomBooks(randomSelection);
      } catch (err) {
        console.error("Error fetching random books:", err);
      }
    };

    fetchRandomBooks();
  }, []);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold text-center mb-6">Book Search</h1>
      <form onSubmit={handleSearch} className="flex justify-center mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="border rounded-l-lg p-2 w-1/2 md:w-1/3"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded-r-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </form>
      {message && <p className="text-red-500 text-center mb-4">{message}</p>}
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => handleBookClick(book.id)}
          >
            <h2 className="font-bold">{book.volumeInfo.title}</h2>
            {book.volumeInfo.authors && (
              <p className="text-sm">
                Authors: {book.volumeInfo.authors.join(", ")}
              </p>
            )}
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="mt-2"
              />
            )}
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold my-4">Recommended Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {randomBooks.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 cursor-pointer hover:shadow-lg transition duration-300"
            onClick={() => handleBookClick(book.id)}
          >
            <h2 className="font-bold">{book.volumeInfo.title}</h2>
            {book.volumeInfo.authors && (
              <p className="text-sm">
                Authors: {book.volumeInfo.authors.join(", ")}
              </p>
            )}
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="mt-2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;

//
