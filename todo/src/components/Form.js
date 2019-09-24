import React, { useState } from 'react';

const Form = props => {
  const [input, setInput] = useState('');

  const handleChanges = event => {
    setInput(event.target.value);
  };

  const addTask = event => {
    event.preventDefault();
    props.taskReducer({ type: 'ADD-TASK', payload: input });
    setInput('');
  };

  const deleteCompleted = event => {
    event.preventDefault();
    props.taskReducer({ type: 'DELETE-COMPLETED' });
  };

  return (
    <div className="form">
      <h1>Todo List</h1>
      <form className="form-input" onSubmit={addTask}>
        <input
          onChange={handleChanges}
          type="text"
          name="input"
          value={input}
          placeholder="Add a task"
        />
        <div>
          <button onClick={addTask}>+</button>
          <button className="delete" onClick={deleteCompleted}>
            Clear Completed
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
