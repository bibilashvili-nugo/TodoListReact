const TodoFinish = ({ setChecked, checked }) => {
  const handleChecked = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return <input type="checkbox" checked={checked} onChange={handleChecked} />;
};

export default TodoFinish;
