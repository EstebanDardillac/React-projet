import React, { useState, useEffect } from 'react';
import './TodoList.css';

interface Task {
  id: string;
  task: string;
  done: boolean;
}

export default function TodoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const handleNewTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

 

  const handleNewTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTaskId = Date.now().toString();
    setTasks([...tasks, { id: newTaskId, task: newTask, done: false }]);
    setNewTask('');
  };

  const handleTaskDelete = (id: string) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  };

  const handleTaskDone = (id: string) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(task => task.id === id);
    newTasks[taskIndex].done = !newTasks[taskIndex].done;
    setTasks(newTasks);
  };

  const notDoneTasks = tasks.filter(task => !task.done);
  const doneTasks = tasks.filter(task => task.done);

  return (
    <div className="app">
      <header className="App-header">
        <h1>Liste de taches a faire:</h1>
        <form onSubmit={handleNewTaskSubmit} className="add-task-form">
          <label>
            Ajouter une tache:
            <input type="text" value={newTask} onChange={handleNewTaskChange} className="add-task-input" />
          </label>
          <button type="submit" className="add-task-button">Add Task</button>
        </form>
        <h2>Non fait:</h2>
        <ul>
          {notDoneTasks.map(task => (
            <div key={task.id}>
              <input type="checkbox" checked={task.done} onChange={() => handleTaskDone(task.id)} className='checkbox-input'/>
              {task.task}
              <button onClick={() => handleTaskDelete(task.id)} className="delete-button">Delete</button>
            </div>
          ))}
        </ul>
        <h2>Fait:</h2>
        <ul>
          {doneTasks.map(task => (
            <div key={task.id}>
              <input type="checkbox" checked={task.done} onChange={() => handleTaskDone(task.id)}  className='checkbox-input'/>
                {task.task}
              <button onClick={() => handleTaskDelete(task.id)} className="delete-button">Delete</button>
            </div>
          ))}
        </ul>
      </header>
    </div>
  );
}
