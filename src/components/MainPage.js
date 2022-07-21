import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <header>
        <h1>React Tasks</h1>
      </header>
      <Link to="/todo-state" className="btn link btn__filter btn__lg">
        ToDo with states
      </Link>
      <Link className="btn btn__success btn__lg" to="/todo-redux">
        ToDo with redux-toolkit
      </Link>
      <Link className="btn btn__secondary btn__lg" to="/pokemon">
        PokeMon Api
      </Link>
    </>
  );
};

export default MainPage;
