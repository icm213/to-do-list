import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>;
      <ToDoList />
    </div>
  );
};

export default App;
