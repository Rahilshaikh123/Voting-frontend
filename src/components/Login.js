import React, { useState } from "react";
import "../css/Form.css";
const Login = (props) => {
  const [formdata, setformdata] = useState({});

  const changeMode = () => {
    props.onChange(true);
  };
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setformdata({ ...formdata, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onData(formdata);
  };
  return (
    <div className="container" onSubmit={submitHandler}>
      <h2>Login</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            placeholder="abc@gmail.com"
            name="email"
            value={formdata.email}
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">password: </label>
          <input
            id="password"
            placeholder="Rah...."
            name="password"
            value={formdata.password}
            onChange={inputHandler}
          ></input>
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
          <button type="button" onClick={changeMode}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
