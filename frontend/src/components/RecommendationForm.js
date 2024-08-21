import React, { useState } from "react";
import "../styles.css";

const RecommendationForm = () => {
  const [genre, setGenre] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!genre) {
      alert("Please enter a genre");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:5000/api/recommend?genre=${genre}`
      );
      const data = await response.json();
      setRecommendation(data.recommendation);
    } catch (error) {
      console.error("Error fetching recommendation:", error);
    }
  };

  return (
    <div className="container">
      <h1>Music Recommendation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          placeholder="Enter genre"
        />
        <button type="submit">Get Recommendation</button>
      </form>
      {recommendation && <p>Recommended Song: {recommendation}</p>}
    </div>
  );
};

export default RecommendationForm;
