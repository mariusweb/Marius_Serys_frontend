import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>My todo-list</h1>
        <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm 
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            setTodos([...todos, trimmedText]);
          }
        }} 
      />
      <TodoList 
        todos={todos} 
        deleteTodo={(todoIndex) => {
          const newTodos = todos.filter((_, index) => index !== todoIndex);
      
          setTodos(newTodos);
        }}
      />
      </header>
      
    </div>
  );
}

export default App;
