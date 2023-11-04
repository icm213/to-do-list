import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="bg-lime-200 flex justify-center items-start min-h-screen">
      <ToDoList />
    </div>
  );
};

export default App;
