import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import cn from 'classnames';
import './TodoListItem.scss';


const TodoListItem = ({ todo }) => {
  return (
    <div className="todoListItem">
      <div className={cn("check", { checked: todo.checked })}>
        { todo.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
        <div className="todo">{ todo.text }</div>
      </div>
      <MdRemoveCircleOutline className="removeBtn" />
    </div>
  );
};

export default TodoListItem;