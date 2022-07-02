import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const tasksData = "http://localhost:5000/tasks";

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

  // Add new task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Remove Tasks
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Reminder for tasks that
  const taskReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
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
    </div>
  );
};

export default App;
