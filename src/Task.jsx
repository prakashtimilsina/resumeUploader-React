export const Task = (props) => {
  return (
    <div
      className="task"
      key={props.id}
      style={{
        backgroundColor: props.completed ? "green" : "white",
        color: props.completed ? "white" : "black",
      }}
    >
      <hr />
      <h1> {props.taskName}</h1>
      <button onClick={() => props.completedTask(props.id)}>{props.completed ? "Completed" : "Not Completed"}</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
      <hr />
    </div>
  );
};
