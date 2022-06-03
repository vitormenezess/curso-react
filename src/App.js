import React, { useState } from "react";

import Tasks from "./components/Tasks";

import "./App.css";

const App = () => {
  // let message = "Hello word!";
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar Progrmação",
      completed: false,
    },
    {
      id: "2",
      title: "Ver filme",
      completed: true,
    },
    {
      id: "3",
      title: "Ler Livros",
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>
    </>
  );
};
export default App;
