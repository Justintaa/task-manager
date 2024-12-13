import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import './App.css';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  // fetch tasks from server
  useEffect(() => {
    axios.get('http://localhost:4000/api/tasks')
    .then(response => {
      setTasks(response.data);
    })
    .catch(error => {
      console.error('There was an error getting the tasks: ', error)
  });
}, []);

//function of adding a new task
const handleAddTask = (taskName) => {
  const newTask = { title: taskName };

  axios.post('http://localhost:4000/api/tasks', newTask)
    .then(response => {
      setTasks([...tasks, response.data]); // Add the new task to the state
    })
    .catch(error => {
      console.error('There was an error adding the task: ', error);
    });
};

//function to delete a task
const handleDeleteTask = (taskId) => { 
  axios.delete(`http://localhost:4000/api/tasks/${taskId}`)
  .then(() => {
    setTasks(tasks.filter(task => task._id !== taskId));
  })
  .catch(error => {
    console.error('There was an error deleting the task: ', error);
  });
};

return (
  <div className="App"> 
    <h1> Simple Task Manager by Justin Ta :) </h1>
    <AddTask onAddTask={handleAddTask} />
    <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
