import { useState, useEffect } from "react";
import "../index.css";

const HealthInfo = ({ searchTerm }) => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=30";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "30a3f8468amshde824a79dd59605p147ccajsn96a6dee283fe",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error("Failed to fetch exercises:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="exercise-list">
      {selectedExercise ? (
        <div className="exercise-details">
          <button onClick={() => setSelectedExercise(null)}>
            Back to list
          </button>
          <h2>{selectedExercise.name}</h2>
          <img src={selectedExercise.gifUrl} alt={selectedExercise.name} />
          <p>{selectedExercise.description}</p>
        </div>
      ) : (
        exercises
          .filter((exercise) =>
            exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((exercise, index) => (
            <div
              key={index}
              className="exercise-card"
              onClick={() => setSelectedExercise(exercise)}
            >
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
            </div>
          ))
      )}
    </div>
  );
};

export default HealthInfo;
