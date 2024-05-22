import { MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import './TodoListItem.scss';


const TodoListItem = () => {
  return (
    <div className="todoListItem">
      <div className="todoWrapper">
        <MdCheckBoxOutlineBlank />
        <div className="todo">할 일</div>
      </div>
      <MdRemoveCircleOutline className="removeBtn" />
    </div>
  );
};

export default TodoListItem;