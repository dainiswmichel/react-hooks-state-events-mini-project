// App.js
import React, { useState } from "react";
import { CATEGORIES, TASKS } from "../data";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleTasks = tasks.filter(
    (task) => selectedCategory === "All" || task.category === selectedCategory
  );

  function onTaskFormSubmit(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(text) {
    setTasks(tasks.filter((task) => task.text !== text));
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={visibleTasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;