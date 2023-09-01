import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import classes from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = UserAuth();

  const navigate = useNavigate();
  const subHandler = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className={classes.form}>
      <label style={{ color: "blue" }} className="col-md-9 text-md-end">
        Signin
      </label>
      <form onSubmit={subHandler}>
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
          Don't have an account ? then{" "}
          <Link to="/signup" className="underline">
            signup
          </Link>
        </p>
        <p className={classes.actions}>
          <button type="submit" className=" btn btn-primary bg-primary">
            Signin
          </button>
        </p>
      </form>
    </div>
  );
}
