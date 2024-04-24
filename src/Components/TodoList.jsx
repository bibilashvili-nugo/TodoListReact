import TodoDelete from "./TodoDelete";
import TodoFinish from "./TodoFinish";

const TodoList = ({ todos, todoList, setTodoList }) => {
  const handleToggleCompletion = (itemId) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === itemId ? { ...item, checked: !item.checked } : item
    );
    setTodoList(updatedTodoList);
  };

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((item) => (
        <li
          key={item.id}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          <span
            style={{
              flexGrow: 1,
              marginRight: "10px",
              textDecoration: item.checked ? "line-through" : "none",
            }}
          >
            {item.text}
          </span>

          <div style={{ display: "flex", alignItems: "center" }}>
            <TodoFinish
              setChecked={() => handleToggleCompletion(item.id)}
              checked={item.checked}
            />
            <TodoDelete
              itemId={item.id}
              todoList={todoList}
              setTodoList={setTodoList}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
