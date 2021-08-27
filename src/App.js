import { useState } from "react"
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from "./components/Todo";

function App() {

  let [todos, settodos] = useState([])

  const addTodo = (todo) => {
    settodos(todos = [todo, ...todos])
  }

  const toggleComplete = id => {
    settodos(todos = todos.map(todo => {
        if ( todo.id === id ) {
          return {
            ...todos,
            completed: !todo.completed
          } 
        } else {
            return false
          }
    }))
  }

  return (
    <div className=" pt-5 d-flex align-items-center flex-column bg-dark vh-100 text-light">
        <TodoForm onSubmit={addTodo}/>
        <div className="mt-4 w-25">
          {todos.map(todo => (
            <Todo todo={todo} toggleComplete={() => toggleComplete(todo.id)}  />
          ))}
        </div>
    </div>
  )
}

export default App;
 