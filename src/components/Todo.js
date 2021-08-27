const Todo = (props) => {
    return (
      <div style={{ cursor : "pointer" }} onClick={props.toggleComplete} className="todo d-flex justify-content-center mt-4 border p-3">
       {props.todo.text}
      </div>
    )
}

export default Todo 