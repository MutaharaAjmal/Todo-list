import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/slices/toDo";

const TodoItem = ({ item, id, completed }) => {
  const dispatch = useDispatch();
  const deleteItem = () => {
    dispatch(deleteTodo(id));
  };
  const completeItem = () => {
    dispatch(updateTodo({ id, changes: { completed: !completed } }));
  };
  const updateItem = () => {
    // dispatch(updateTodo({ id, changes: { completed: !completed } }));
    let newItem = prompt(`Update ${item}?`, item);
    dispatch(updateTodo({ id, changes: { todo: newItem }, completed }));
  };
  return (
    <div className="todo-list">
      <li style={{ textDecoration: completed ? "line-through" : "" }}>
        {item}
      </li>
      <div className="btns">
        {completed ? (
          <button className="btn btn__danger btn__sm" onClick={completeItem}>
            Reset
          </button>
        ) : (
          <button className="btn btn__success btn__sm" onClick={completeItem}>
            Complete
          </button>
        )}

        <button className="btn btn__secondary btn__md" onClick={updateItem}>
          Update
        </button>
        <button className="btn btn__danger btn__sm" onClick={deleteItem}>
          X
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
