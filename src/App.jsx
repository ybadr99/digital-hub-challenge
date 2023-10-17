import { useState, useEffect } from 'react';
import Task from './components/Task';
import Form from './components/Form';

function App() {
  const getData = () => {
    const data = localStorage.getItem('tasks');

    return JSON.parse(data) || [];
  };

  const [tasks, setTasks] = useState(getData());
  const [filterText, setFilterText] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: new Date().getTime(),
      title: title,
      status: 'not-started',
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((todo) => todo.id !== id));
  };

  const editTask = (id, t) => {
    setTasks((preState) =>
      preState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            title: t,
          };
        }

        return todo;
      })
    );
  };

  const updateStatus = (id, updatedStatus) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: updatedStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    setFilteredTasks(
      tasks.filter((task) => task.title.toLowerCase().includes(filterText))
    );
  }, [filterText, tasks]);

  return (
    <div className="container">
      <div className="header">
        <input
          className="filter"
          type="text"
          placeholder="Filter your tasks"
          value={filterText}
          onChange={(e) => handleFilter(e.target.value)}
        />
        <Form addTask={addTask} />
      </div>
      <div className="task-list">
        {filteredTasks.map((task, i) => (
          <Task
            key={i}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
            updateStatus={updateStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
