import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { AuthContext } from "../hook/authContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import ErrorModal from "./Error";

const Navbar = () => {
  const [error, setError] = useState(null);
  const auth = useContext(AuthContext);
  const history = useNavigate();
  const logHandler = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/logout", {
        method: "GET",
      });
      const data = await response.json();
      if (data.msg) {
        throw new Error(data.msg);
      }
      history("/");
    } catch (error) {
      setError(error.message);
    }
    auth.logout();
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && <ErrorModal error={error} onCancel={errorHandler} />}

      <nav>
        <ul className="navbar">
          <div className="links">
            <li>
              <Link to="/">Auth</Link>
            </li>

            {auth.role === "admin" && (
              <li>
                <Link to="/admin">Admin</Link>
              </li>
            )}
            {auth.isLoggedin && (
              <li>
                <Link to="/vote">Vote</Link>
              </li>
            )}
          </div>
          <div className="button">
            {auth.isLoggedin && (
              <li>
                <button onClick={logHandler}>Logout</button>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </>
    // ReactDOM.createPortal(content, document.getElementById("nav"))
  );
};

export default Navbar;
