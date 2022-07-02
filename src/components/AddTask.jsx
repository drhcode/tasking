import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please enter a text");
      return;
    }
    onAdd({ text, date, time, reminder });

    setText("");
    setDate("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label> Task Name</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
      </div>
      <div className="form-control">
        <label> Date </label>
        <input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
      </div>
      <div className="form-control">
        <label> Time </label>
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          type="time"
        />
      </div>
      <div className="form-control form-control-check">
        <label> Want Reminder? </label>
        <input
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
          checked={reminder}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Add Task" />
    </form>
  );
};

export default AddTask;
