import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import classes from "./Register.module.css";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser } = UserAuth();
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const success=''
    try {
     success=await createUser(email, password);
     console.log(success)
    } catch (error) {
      setError(error.message);
    }
    if (error!=="") {
      console.log(error)
    } else if(!success==='') {
      nav("/");
    }
  };

  return (
    <div className={classes.form}>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
        </p>
        <p>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </p>
        <p>
          Already have an account ? then{" "}
          <Link to="/" className="underline">
            signin
          </Link>
        </p>

        <p className={classes.actions}>
          <button type="submit" className="btn btn-primary bg-primary">
            SignUp
          </button>
        </p>
      </form>
    </div>
  );
}
