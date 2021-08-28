const Todo = (props) => {
  return (
    <div
      style={{
        cursor: "pointer",
        textDecoration: props.todo.completed ? "line-through" : "",
      }}
      // key={props.todo.id}
      onClick={props.toggleComplete}
      className="todo d-flex justify-content-around mt-4 border p-3"
    >
      {props.todo.text}

      <button onClick={props.onDelete}>
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
