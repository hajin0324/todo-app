import { FaPlus } from 'react-icons/fa';
import './TodoInput.scss';
import { useCallback, useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(e => {
    if (value != '') {
      addTodo(value);
      setValue(''); 
    }
    e.preventDefault();
  }, [addTodo, value], );

  return (
    <form className="todoInput" onSubmit={handleSubmit}>
      <input 
        placeholder="새로운 할 일"
        value={value}
        onChange={handleChange}  
      />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoInput;