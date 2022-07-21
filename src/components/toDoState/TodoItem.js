import React from "react";

const TodoItem = ({
  item,
  index,
  deleteTodoItem,
  completeTodoItem,
  updateTodoItem,
}) => {
  return (
    <div className="todo-list">
      <li style={{ textDecoration: item.complete ? "line-through" : "" }}>
        {item.todo}
      </li>
      <div className="btns">
        {item.complete ? (
          <button
            className="btn btn__danger btn__sm"
            onClick={() => completeTodoItem(index)}
          >
            Reset
          </button>
        ) : (
          <button
            className="btn btn__success btn__sm"
            onClick={() => completeTodoItem(index)}
          >
            Complete
          </button>
        )}

        <button
          className="btn btn__secondary btn__md"
          onClick={() => updateTodoItem(index)}
        >
          Update
        </button>
        <button
          className="btn btn__danger btn__sm"
          onClick={() => deleteTodoItem(index)}
        >
          X
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
