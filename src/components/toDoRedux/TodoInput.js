import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, todoSelectors } from "../../redux/slices/toDo";

const TodoInput = () => {
  const [text, setText] = useState("");
  const todoCount = useSelector(todoSelectors.selectTotal);
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    if (text === "") {
      return;
    }
    const items = text.split(",");
    dispatch(
      addTodos(
        items.map((item) => ({ id: nanoid(), todo: item, completed: false }))
      )
    );
    setText("");
  };

  return (
    <form onSubmit={submit}>
      <h3 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h3>

      <h4 className="label__lg">Count: {todoCount}</h4>
      <input
        type="text"
        placeholder="Create todo"
        required
        name="text"
        autoComplete="off"
        className="input input__lg"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn__primary btn__lg" onClick={submit}>
        Create
      </button>
    </form>
  );
};
export default TodoInput;
