import React, { useState, useEffect } from "react";
import "../css/Admin.css";
import ErrorModal from "../components/Error";
const Admin = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVoteCounts = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/page/admin", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();

        setCandidates(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchVoteCounts();
  }, []);
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal error={error} onCancel={errorHandler} />}
      <div className="vote-counter-container">
        <h2>Candidate Vote Counts</h2>
        <ul className="candidate-list">
          {candidates.map((candidate) => (
            <li key={candidate._id} className="candidate-item">
              <span className="candidate-name">{candidate._id}</span>
              <span className="vote-count">{candidate.votes}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Admin;
