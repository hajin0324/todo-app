import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer'
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'todo app 만들기',
      checked: true
    },
    {
      id: 2,
      text: '코딩테스트 문제 풀기',
      checked: true
    },
    {
      id: 3,
      text: '영화보기',
      checked: false
    }
  ]);

  const nextId = useRef(4);

  const addTodo = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo));
    nextId.current += 1;
  }, [todos], );
  
  const removeTodo = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos], );

  const toggleTodo = useCallback(id => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    ));
  }, [todos], );

  return (
    <TodoContainer>
      <TodoInput addTodo={addTodo}/>  
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
    </TodoContainer>
  );
}

export default App;