import TodoItem from './TodoItem';

const TodoLists = props => {
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="text-2xl font-medium">Today's Activity</h1>
      {props.todos.length == 0
        ? <p>You haven't added any activity yet</p>
        : <ol className="list-disc">
            {props.todos.map ((activity, index) => {
              return (
                <TodoItem
                  key={index}
                  index={index}
                  activity={activity}
                  setTodos={props.setTodos}
                  todos={props.todos}
                />
              );
            })}
          </ol>}
    </div>
  );
};

export default TodoLists;
