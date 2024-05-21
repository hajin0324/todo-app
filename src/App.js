import React from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer/TodoContainer'
import TodoInput from './components/TodoInput/TodoInput';

function App() {
  return (
    <TodoContainer>
      <TodoInput />  
    </TodoContainer>
  );
}

export default App;