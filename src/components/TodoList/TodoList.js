import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss'

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div className="todoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo}/>
      ))}
    </div>
  );
};

export default TodoList;