import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const tasksData = "http://localhost:5000/tasks/";

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // getting tasks from server
  const fetchTasks = async () => {
    const response = await fetch(tasksData);
    const data = await response.json();

    return data;
  };

  // GET A TASK FROM SERVER
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();

    return data;
  };

  // Add new task
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Remove Tasks
  const removeTask = async (id) => {
    await fetch(`tasksData/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Reminder for tasks that
  const taskReminder = async (id) => {
    const taskToRemind = await fetchTask(id);
    const updatedTask = { ...taskToRemind, reminder: !taskToRemind.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header
        title="Tasking App"
        onAdd={() => setAddTaskModal(!addTaskModal)}
        showAdd={addTaskModal}
      />
      {addTaskModal && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onRemove={removeTask} onReminder={taskReminder} />
      ) : (
        "No task to do"
      )}

      <Footer />
      <About />
    </div>
  );
};

export default App;
