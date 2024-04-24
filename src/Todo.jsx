import { useState } from "react";
import TodoList from "./Components/TodoList";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const trimmedValue = inputValue.trim();

    if (trimmedValue) {
      const newTodo = {
        id: Math.floor(Math.random() * 1000),
        text: trimmedValue,
      };
      setTodos((todos) => [...todos, newTodo]);
    }

    setInputValue("");
  };

  console.log(checked);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInput}
        className="input"
      />
      <button onClick={handleSubmit}>Add Todo</button>
      <ul>
        <TodoList
          todos={todos}
          todoList={todos}
          setTodoList={setTodos}
          setChecked={setChecked}
          checked={checked}
        />
      </ul>
    </div>
  );
};

export default Todo;
