import React, { useState } from 'react';

const Form = props => {
  const [input, setInput] = useState('');

  const handleChanges = event => {
    setInput(event.target.value);
  };

  const addTask = () => {
    props.taskReducer({ type: 'ADD-TASK', payload: input });
  };

  return (
    <div className="form">
      <h1>Todo List</h1>
      <div className="form-input">
        <input
          onChange={handleChanges}
          type="text"
          name="input"
          value={input}
          placeholder="Add a task"
        />
        <button onClick={addTask}>+</button>
      </div>
    </div>
  );
};

export default Form;
