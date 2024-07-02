import { useState } from "react";
import "./index.css";

function Todolist() {
  const [tasks, setTasks] = useState(["eat my breakfast", "go to work"]);
  const [newTask, setNewTask] = useState("");

  const changeText = (event) => {
    setNewTask(event.target.value);
  };
  
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const upTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      if (index > 0) {
        [updatedTasks[index], updatedTasks[index - 1]] = [
          updatedTasks[index - 1],
          updatedTasks[index],
        ];
      }
      return updatedTasks;
    });
  };

  const downTask = (index) => {
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks];
      if (index < updatedTasks.length - 1) {
        [updatedTasks[index], updatedTasks[index + 1]] = [
          updatedTasks[index + 1],
          updatedTasks[index],
        ];
      }
      return updatedTasks;
    });
  };

  return (
    <div className="todolist">
      <h1>TO DO LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your task .."
          value={newTask}
          onChange={changeText}
        />
        <button onClick={addTask}>ADD</button>
      </div>
      <div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="delete" onClick={() => deleteTask(index)}>delete</button>
              <button className="up" onClick={() => upTask(index)}>up</button>
              <button className="down" onClick={() => downTask(index)}>down</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todolist;
