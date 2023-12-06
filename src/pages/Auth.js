import React, { useContext, useState } from "react";
import Login from "../components/Login";
import ErrorModal from "../components/Error";
import { AuthContext } from "../hook/authContext";
import { useNavigate } from "react-router-dom";
import Register from "../components/Register";

const Auth = () => {
  const [error, setError] = useState(null);
  const [signup, setSignup] = useState(false);
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const changeHandler = (value) => {
    setSignup(value);
  };
  const errorHandler = () => {
    setError(false);
  };
  const dataHandler = async (formdata) => {
    try {
      let Url;
      if (!signup) {
        Url = "/api/login";
      } else {
        Url = "/api/register";
      }

      const response = await fetch(Url, {
        method: "POST",
        body: JSON.stringify(formdata),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.msg) {
        throw new Error(data.msg);
      }
      auth.name = data.name;
      auth.userId = data.userId;
      auth.role = data.role;
      auth.login({ name: auth.name, userId: auth.userId, role: auth.role });
      navigate("/vote");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <>
      {error && <ErrorModal error={error} onCancel={errorHandler} />}
      {signup && (
        <Register onChange={changeHandler} onData={dataHandler}></Register>
      )}
      ;
      {!signup && <Login onChange={changeHandler} onData={dataHandler}></Login>}
      ;
    </>
  );
};

export default Auth;
