import { FaTimes } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Task = ({ task, onRemove, onReminder }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onReminder(task.id)}
    >
      <FaEye style={showButton} />
      <h3>
        {task.text}{" "}
        <FaTimes style={deleteButton} onClick={() => onRemove(task.id)} />
      </h3>
      <p>{task.date}</p>
      <p>{task.time}</p>
    </div>
  );
};

const deleteButton = {
  backgroundColor: "red",
  color: "white",
  borderRadius: "0.5rem",
  width: "2.5rem",
  height: "2.5rem",
};

const showButton = {
  backgroundColor: "green",
  color: "white",
  borderRadius: "0.5rem",
  width: "2.5rem",
  height: "2.5rem",
};
export default Task;
