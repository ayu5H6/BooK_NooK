import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchBookDetails = async () => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`
      );
      setBook(res.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching book details. Please try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookDetails();
  }, [bookId]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="container mx-auto py-6">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-6 md:mb-0">
          {book.volumeInfo.imageLinks ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
              className="rounded-lg w-full h-auto"
            />
          ) : (
            <div className="bg-gray-300 rounded-lg w-full h-64 flex items-center justify-center">
              <span className="text-gray-600">No Image Available</span>
            </div>
          )}
        </div>
        <div className="md:w-2/3 md:pl-6">
          <h1 className="text-3xl font-bold mb-2">{book.volumeInfo.title}</h1>
          {book.volumeInfo.authors && (
            <p className="text-sm text-gray-600 mb-4">
              Authors: {book.volumeInfo.authors.join(", ")}
            </p>
          )}
          <p className="text-lg mb-4">
            <strong>Published:</strong> {book.volumeInfo.publishedDate}
          </p>
          <p className="text-lg mb-4">
            <strong>Publisher:</strong> {book.volumeInfo.publisher}
          </p>
          <p className="text-lg mb-4">
            <strong>Page Count:</strong> {book.volumeInfo.pageCount}
          </p>
          <p className="text-lg mb-4">
            <strong>Categories:</strong>{" "}
            {book.volumeInfo.categories?.join(", ") || "N/A"}
          </p>
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-4">
            {book.volumeInfo.description
              ? book.volumeInfo.description.replace(/<\/?[^>]+(>|$)/g, "")
              : "No description available."}
          </p>
          <a
            href={book.volumeInfo.infoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            View on Google Books
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
