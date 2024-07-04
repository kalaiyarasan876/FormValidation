import React, { useState } from "react";
import Validation from "./Validation";

function FormValidation() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState({});

  const handleInput = (e) => {
    const newObj = {
      ...values,
      [e.target.values]: e.target.values
    };
    setValues(newObj);
  };

  function handleValidation(e) {
    e.preventDefault();
    setError(Validation(values));
  }

  return (
    <section className="App">
      <form onSubmit={handleValidation}>
        <h2>Form Validation</h2>
        <div>
          <lable>UserName: </lable>
          <input
            type="text"
            placeholder="  Enter your Email"
            name="name"
           
            onChange={handleInput}
          />
          {error.name && <p style={{ color: "red" }}> {error.name} </p>}
        </div>
        <div>
          <lable>Email: </lable>
          <input
            type="email"
            placeholder="  Enter your Email"
            name="email"
          
            onChange={handleInput}
          />
          {error.email && <p style={{ color: "red" }}> {error.email} </p>}
        </div>
        <div>
          <lable>Password: </lable>
          <input
            type="password"
            placeholder="  Enter your password"
            name="password"
         
            onChange={handleInput}
          />
          {error.password && <p style={{ color: "red" }}> {error.password} </p>}
        </div>
        <div>
          <button type="submit" value="Submit">Send</button>
        </div>
      </form>
    </section>
  );
}

export default FormValidation;
