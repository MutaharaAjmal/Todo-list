import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import ToDoState from "./pages/toDoState";
import Pokemon from "./pages/pokemonApi";
import ToDoRedux from "./pages/toDoRedux";

function App() {
  const pokemon = ["bulbasaur", "pikachu", "ditto", "bulbasaur"];

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/todo-state" element={<ToDoState />} />
          <Route exact path="/todo-redux" element={<ToDoRedux />} />
          <Route
            exact
            path="/pokemon"
            element={pokemon.map((poke, index) => (
              <Pokemon key={index} name={poke} />
            ))}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
