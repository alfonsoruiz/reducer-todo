import React from 'react';

const Todo = props => {
  const toggleComplete = todo => {
    props.taskReducer({ type: 'TOGGLE-COMPLETE', payload: todo });
  };

  return (
    <div className="todo">
      <p
        className={props.todo.completed ? 'completed' : ''}
        onClick={() => toggleComplete(props.todo)}
      >
        {props.todo.task}
      </p>
    </div>
  );
};

export default Todo;
