import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss'

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <div className="todoList">
      {todos.map(todo => (
        <TodoListItem todo={todo} key={todo.id} removeTodo={removeTodo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList;