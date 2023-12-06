import React, { useState } from "react";
import "../css/Vote.css";
import ErrorModal from "../components/Error";
const Vote = () => {
  const [vote, setVote] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [error, setError] = useState(null);
  const handleSelection = (e) => {
    setSelectedCandidate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/page/vote", {
        method: "POST",
        body: JSON.stringify({ name: selectedCandidate }),
        headers: {
          Accept: "appllication/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (data.msg) {
        throw new Error(data.msg);
      }
      setVote(true);
    } catch (error) {
      setError(error.message);
    }
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal error={error} onCancel={errorHandler} />}
      {vote && (
        <div className="modal">
          <h3>Sucessfully Voted</h3>
        </div>
      )}
      <div className="voting-container">
        <h2>Candidate Voting</h2>
        <form onSubmit={handleSubmit}>
          <div className="candidate">
            <input
              type="radio"
              id="candidate1"
              name="candidate"
              value="Candidate 1"
              checked={selectedCandidate === "Candidate 1"}
              onChange={handleSelection}
            />
            <label htmlFor="candidate1">Candidate 1</label>
          </div>
          <div className="candidate">
            <input
              type="radio"
              id="candidate2"
              name="candidate"
              value="Candidate 2"
              checked={selectedCandidate === "Candidate 2"}
              onChange={handleSelection}
            />
            <label htmlFor="candidate2">Candidate 2</label>
          </div>
          <div className="candidate">
            <input
              type="radio"
              id="candidate3"
              name="candidate"
              value="Candidate 3"
              checked={selectedCandidate === "Candidate 3"}
              onChange={handleSelection}
            />
            <label htmlFor="candidate3">Candidate 3</label>
          </div>
          <div className="candidate">
            <input
              type="radio"
              id="candidate4"
              name="candidate"
              value="Candidate 4"
              checked={selectedCandidate === "Candidate 4"}
              onChange={handleSelection}
            />
            <label htmlFor="candidate3">Candidate 4</label>
          </div>
          <button type="submit">Vote</button>
        </form>
      </div>
    </>
  );
};

export default Vote;
