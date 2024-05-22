import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer'
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <TodoContainer>
      <TodoInput />  
      <TodoList />
    </TodoContainer>
  );
}

export default App;