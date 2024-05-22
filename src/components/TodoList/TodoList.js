import TodoListItem from '../TodoListItem/TodoListItem';
import './TodoList.scss'

const TodoList = () => {
  return (
    <div className="todoList">
      <TodoListItem />
      <TodoListItem />
    </div>
  );
};

export default TodoList;