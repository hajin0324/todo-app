import './TodoContainer.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="todoContainer">
      <div className="title">To do</div>
      <div className="content">{ children }</div>
    </div>
  );
};

export default TodoTemplate;