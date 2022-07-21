import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";
import Header from "../../components/toDoRedux/Header";
import TodoInput from "../../components/toDoRedux/TodoInput";
import TodoItem from "../../components/toDoRedux/TodoItem";
import { todoSelectors } from "../../redux/slices/toDo";

function ToDoRedux() {
  const allTodos = useSelector(todoSelectors.selectEntities);
  const [todoItems, setTodoItems] = React.useState([
    { todo: "Complete React task", complete: false },
    { todo: "Do Laundry", complete: false },
    { todo: "Make Dinner", complete: false },
  ]);

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };
  const todoList = [];
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todoList.push(
        <TodoItem
          key={todoItem.id}
          id={todoItem.id}
          item={todoItem.todo}
          completed={todoItem.completed}
          updateTodoItem={updateTodoItem}
        />
      );
    }
  }
  return (
    <div className="app">
      <Header />
      <TodoInput />
      <div>{todoList}</div>
    </div>
  );
}
export default ToDoRedux;
