import Task from "./Task";
const Tasks = ({ tasks, onRemove, onReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onRemove={onRemove}
          onReminder={onReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
