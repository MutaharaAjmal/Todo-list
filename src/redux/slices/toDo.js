import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);
console.log(todoAdapter);
const todoSlice = createSlice({
  name: "todos",

  initialState: todoAdapter.getInitialState({
    complete: "",
    deletedTodos: [],
  }),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo(state, action) {
      state.deletedTodos.push(state.entities[action.payload]);
      todoAdapter.removeOne(state, action);
    },
    clearTodos: todoAdapter.removeAll,

    updateTodo: todoAdapter.updateOne,
    restoreTodo(state, action) {
      todoAdapter.addOne(state, action);
      state.deletedTodos = state.deletedTodos.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  addTodo,
  addTodos,
  deleteTodo,
  deleteTodos,
  clearTodos,
  updateTodo,
  restoreTodo,
} = todoSlice.actions;
console.log(updateTodo);
export default todoSlice.reducer;
