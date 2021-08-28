import "./TodoFormStyles.css";
import { useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
  let [text, settext] = useState("");

  const handleInputChange = (e) => {
    settext((text = e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Error! Please add a todo :(");
      return;
    }

    props.onSubmit({
      text: text,
      completed: false,
      id: shortid.generate(),
    });
    settext((text = ""));
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={text}
        onChange={handleInputChange}
        type="text"
        className="todo-inp p-2 rounded-start mw-100"
      />
      <button type="submit" className="add-btn btn btn-info rounded fs-5">
        +
      </button>
    </form>
  );
};

export default TodoForm;
