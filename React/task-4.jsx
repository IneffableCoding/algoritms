import { useState, useEffect } from "react";

/** 
Написать todo лист на react, с функционалом
 - изменения статуса completed/uncompleted, в случае если completed, то элемент перечеркут
 - список итемов
 - инпут с возможностью добавления нового итема
*/

export const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
            onClick={() => toggleTask(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
