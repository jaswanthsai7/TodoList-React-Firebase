import React, { useState } from "react";
import classes from "./AddToList.module.css";

export default function AddToList(props) {
  const [text, setText] = useState("");
  const [date, setDate] = useState();
  const [priority, setPriority] = useState("");

  const bodyChangeHandler = (event) => {
    setText(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const priorityChangeHandler = (event) => {
    setPriority(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      text: text,
      date: date,
      author: "",
      priority: priority,
    };
    console.log(data);
    props.addToList(data);
  };

  const closeForm = () => {
    props.closeForm();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" required onChange={dateChangeHandler} />
      </p>

      <p>
        <label htmlFor="priority">Priority</label>

        <select
          className="custom-select "
          id="priority"
          required
          onChange={priorityChangeHandler}
        >
          <option>Choose...</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </p>

      <p className={classes.actions}>
        <button type="button" onClick={closeForm}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}
