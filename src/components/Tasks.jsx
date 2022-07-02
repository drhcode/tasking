import Task from "./Task";
const Tasks = ({ tasks, onRemove, onReminder }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onRemove={onRemove}
          onReminder={onReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
