import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBookDetails = async () => {
      if (!bookId) {
        setError("No book ID provided.");
        setLoading(false);
        return;
      }
      try {
        const res = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${bookId}`
        );
        setBook(res.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching book details.");
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [bookId]);

  const stripHtmlTagsAndFormat = (html) => {
    const textWithLineBreaks = html.replace(/<br\s*\/?>/g, "\n");
    const cleanText = textWithLineBreaks.replace(/<[^>]*>/g, "");
    return cleanText;
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const description = book.volumeInfo.description
    ? stripHtmlTagsAndFormat(book.volumeInfo.description)
    : "No description available.";

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-3xl font-bold">{book.volumeInfo.title}</h1>
      {book.volumeInfo.authors && (
        <p>Authors: {book.volumeInfo.authors.join(", ")}</p>
      )}
      {book.volumeInfo.imageLinks && (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
      )}
      <div className="description">
        {description.split("\n").map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
      <a
        href={book.volumeInfo.infoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        More Info
      </a>
    </div>
  );
};

export default BookDetail;
