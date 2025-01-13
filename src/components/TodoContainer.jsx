import {useState} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoLists from './TodoLists';

const TodoConatiner = () => {
  const [todos, setTodos] = useState ([]);
  console.log ('state todos', todos);
  return (
    <div className="todo-container flex gap-5 flex-wrap">

      <AddTodoForm todos={todos} setTodos={setTodos} />
      <TodoLists todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoConatiner;
