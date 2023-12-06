import React, { useReducer } from "react";
const inputvalidator = (state, action) => {
  switch (action.type) {
    case "INPUT":
      return {
        ...state,
        [action.name]: action.value,
      };

    default:
      return state;
  }
};
const Register = (props) => {
  const [formdata, dispatch] = useReducer(inputvalidator, {
    name: "",
    email: "",
    password: "",
    phonenumber: null,
  });

  const changeMode = () => {
    props.onChange(false);
  };
  const inputHandler = (event) => {
    const { name, value } = event.target;
    dispatch({ type: "INPUT", name, value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onData(formdata);
  };
  return (
    <div className="container">
      <h2>Register</h2>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Username: </label>
          <input
            id="name"
            placeholder="USERNAME"
            name="name"
            value={formdata.name}
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            placeholder="EMAIL ID"
            name="email"
            value={formdata.email}
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            placeholder="PASSWORD"
            name="password"
            value={formdata.password}
            onChange={inputHandler}
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="phonenumber">Phonenumber: </label>
          <input
            id="phonenumber"
            placeholder="PHONE NUMBER."
            name="phonenumber"
            value={formdata.phonenumber}
            onChange={inputHandler}
          ></input>
        </div>
        <div className="btn">
          <button type="submit">Submit</button>
          <button type="button" onClick={changeMode}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
