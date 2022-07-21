import React, { useState } from "react";

const TodoInput = ({ createTodoItem }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return;
    }
    createTodoItem(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h3>
      <input
        type="text"
        placeholder="Create todo"
        required
        name="text"
        autoComplete="off"
        className="input input__lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="btn btn__primary btn__lg" onClick={handleSubmit}>
        Create
      </button>
    </form>
  );
};
export default TodoInput;
