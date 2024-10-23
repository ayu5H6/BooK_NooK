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

  // Fetch random books when the component mounts
  useEffect(() => {
    const fetchRandomBooks = async () => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=fiction"
        ); // A general query
        const items = res.data.items;

        // Randomly select 5 books from the fetched items
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
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4">Book Search</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="border rounded p-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Search
        </button>
      </form>
      {message && <p>{message}</p>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
        {books.map((book) => (
          <div
            key={book.id}
            className="border rounded p-4 cursor-pointer"
            onClick={() => handleBookClick(book.id)}
          >
            <h2 className="font-bold">{book.volumeInfo.title}</h2>
            {book.volumeInfo.authors && (
              <p>Authors: {book.volumeInfo.authors.join(", ")}</p>
            )}
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
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
            className="border rounded p-4 cursor-pointer"
            onClick={() => handleBookClick(book.id)}
          >
            <h2 className="font-bold">{book.volumeInfo.title}</h2>
            {book.volumeInfo.authors && (
              <p>Authors: {book.volumeInfo.authors.join(", ")}</p>
            )}
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
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
