const TodoItem = props => {
  const handleDelete = activity => {
    let todoList = props.todos;
    todoList.pop (activity);
    props.setTodos ([...todoList]);
  };

  return (
    <li key={props.index + 1} className="flex justify-between p-2">
      <p className="text-lg">{`${props.index + 1}. ${props.activity}`}</p>
      <button
        className="text-red-500"
        onClick={() => {
          handleDelete (props.activity);
        }}
      >
        ❌
      </button>
    </li>
  );
};

export default TodoItem;
