const TodoDelete = ({ itemId, todoList, setTodoList }) => {
  const handleDelete = () => {
    const updateTodoList = todoList.filter((item) => item.id !== itemId);
    setTodoList(updateTodoList);
  };

  return (
    <div onClick={handleDelete} className="close">
      ❌
    </div>
  );
};

export default TodoDelete;
