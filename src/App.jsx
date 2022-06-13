import React, { useState } from "react";

import { v4 as uiidv4 } from "uuid";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

import "./App.css";

const App = () => {
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
  const handleTaskClick = (taskId) => {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTask)
  };
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uiidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
      </div>
    </>
  );
};
export default App;
