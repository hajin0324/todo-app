import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import cn from 'classnames';
import './TodoListItem.scss';


const TodoListItem = ({ todo, removeTodo, toggleTodo }) => {
  return (
    <div className="todoListItem">
      <div 
        className={cn("check", { checked: todo.checked })}
        onClick={() => toggleTodo(todo.id)}
      >
        { todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
        <div className="todo">{ todo.text }</div>
      </div>
      <MdRemoveCircleOutline 
        className="removeBtn" 
        onClick={() => removeTodo(todo.id)}
      />
    </div>
  );
};

export default TodoListItem;