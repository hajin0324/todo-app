import { FaPlus } from 'react-icons/fa';
import './TodoInput.scss';

const TodoInput = () => {
  return (
    <form className="todoInput">
      <input placeholder="새로운 할 일" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoInput;