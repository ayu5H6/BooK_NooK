import React, { useState } from "react";
import GenreSelection from "./GenreSelection"; // Ensure this component exists
import { useUser } from "../context/UserContext"; // Import context
import { useNavigate } from "react-router-dom"; // Import useNavigate

const GenreSelectionPage = () => {
  const { setSelectedGenres } = useUser(); // Get setSelectedGenres from context
  const [selectedGenres, setSelectedGenresLocal] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = () => {
    setSelectedGenres(selectedGenres); // Store selected genres in context
    navigate("/books"); // Navigate to the books page after submitting
  };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-4">Select Genres</h1>
      <GenreSelection
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenresLocal} // Pass local state updater
      />
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Submit
      </button>
    </div>
  );
};

export default GenreSelectionPage;
