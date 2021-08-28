import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  let [todos, settodos] = useState([]);
  let [todosToShow, settodosToShow] = useState("all");
  let [toggleAllComplete, settoggleAllComplete] = useState(true);

  const addTodo = (todo) => {
    settodos((todos = [todo, ...todos]));
  };

  const toggleComplete = (id) => {
    settodos(
      (todos = todos.map((todo) => {
        if (todo.id === `${id}`) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }))
    );
  };

  const handleDelete = (todo) => {
    console.log(todo);
    settodos((todos = todos.filter((t) => t.id !== todo.id)));
  };

  const deleteAllComplete = () => {
    settodos((todos = todos.filter((todo) => !todo.completed)));
  };

  const handleToggleAllComplete = () => {
    settodos(
      (todos = todos.map((todo) => ({
        ...todo,
        completed: toggleAllComplete,
      })))
    );
    settoggleAllComplete((toggleAllComplete = !toggleAllComplete));
  };

  let filterdTodos = [];

  if (todosToShow === "all") {
    filterdTodos = todos;
  } else if (todosToShow === "completed") {
    filterdTodos = todos.filter((todo) => todo.completed);
  } else {
    filterdTodos = todos.filter((todo) => !todo.completed);
  }

  return (
    <div className=" pt-5 d-flex align-items-center flex-column bg-dark vh-100 text-light">
      <TodoForm onSubmit={addTodo} />
      <div className="mt-4 w-25">
        {filterdTodos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo}
            onDelete={() => handleDelete(todo)}
            toggleComplete={() => toggleComplete(todo.id)}
          />
        ))}
      </div>
      <div className="mt-4">
        no. of todos not completed:{" "}
        {todos.filter((todo) => !todo.completed).length}
      </div>
      <div>
        <button onClick={() => settodosToShow((todosToShow = "all"))}>
          all
        </button>

        <button onClick={() => settodosToShow((todosToShow = "completed"))}>
          completed
        </button>
        <button onClick={() => settodosToShow((todosToShow = "not completed"))}>
          not completed
        </button>
      </div>
      <div>
        {todos.some((todo) => todo.completed) ? (
          <button onClick={deleteAllComplete}>delete all completed</button>
        ) : null}
      </div>
      <div>
        <button onClick={handleToggleAllComplete}>
          Toggle all complete: {`${toggleAllComplete}`}
        </button>
      </div>
    </div>
  );
}

export default App;
