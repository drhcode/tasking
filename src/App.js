import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Car Service",
      date: "30-06-2022",
      time: "13:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Dentis appointmen",
      date: "25-06-2022",
      time: "09:00",
      reminder: false,
    },
    {
      id: 3,
      text: "Wash the car",
      date: "29-06-2022",
      time: "17:00",
      reminder: true,
    },
  ]);

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
