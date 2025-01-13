import {useState} from 'react';

const AddTodoForm = props => {
  const [newTodo, setNewTodo] = useState ('');

  const handleChange = event => {
    setNewTodo (event.target.value);
  };

  const handleAdd = () => {
    if (newTodo) {
      props.setTodos ([...props.todos, newTodo]);
      setNewTodo ('');
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-medium my-0">Manage Activities</h1>
      <div>
        <input
          type="text"
          name=""
          id=""
          placeholder="Next Activity?"
          className="bg-white border border-black p-1"
          onChange={handleChange}
          value={newTodo}
        />
        <button
          className="bg-black text-white p-1 border border-black"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodoForm;
