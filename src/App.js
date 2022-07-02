import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Car Service",
      day: "30-06-2022",
      clock: "13:00",
      reminder: true,
    },
    {
      id: 2,
      text: "Dentis appointmen",
      day: "25-06-2022",
      clock: "09:00",
      reminder: false,
    },
    {
      id: 3,
      text: "Wash the car",
      day: "29-06-2022",
      clock: "17:00",
      reminder: true,
    },
  ]);

  // Remove Tasks
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id != id));
  };

  // Reminder for tasks that
  const taskReminder = (id) => {
    console.log(id);
  };

  return (
    <div className="container">
      <Header title="Tasking App" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onRemove={removeTask} onReminder={taskReminder} />
      ) : (
        "No task to do"
      )}
    </div>
  );
};

export default App;
