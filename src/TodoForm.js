import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';

const TodoForm = ({ saveTodo }) => {
    const [value, setValue] = useState('');
  return (
    <form
        onSubmit={(e) => {
            e.preventDefault();
            saveTodo(value);
            setValue('');
        }}
    >
      <TextField 
        variant="outlined"
        placeholder="Add todo"
        margin="normal" 
        onChange={(event) => {
            setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default TodoForm;