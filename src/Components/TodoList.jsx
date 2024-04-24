import TodoDelete from "./TodoDelete";
import TodoFinish from "./TodoFinish";
import "./TodoList.css";

const TodoList = ({ todos, todoList, setTodoList, setChecked, checked }) => {
  return todos.map((item) => (
    <li key={item.id} className="list">
      {checked ? (
        <span className="line">{item.text}</span>
      ) : (
        <span>{item.text}</span>
      )}

      <div className="list-components">
        <TodoFinish setChecked={setChecked} checked={checked} />
        <TodoDelete
          itemId={item.id}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      </div>
    </li>
  ));
};

export default TodoList;
