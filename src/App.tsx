import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Calendar from "./pages/calendar";

const App = () => {
  return (
    <div className="bg-white flex justify-center items-start min-h-screen">
      <ToDoList />
      <Calendar />
    </div>
  );
};

export default App;
