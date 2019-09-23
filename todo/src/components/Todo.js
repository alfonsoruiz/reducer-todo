import React from 'react';

const Todo = props => {
  return (
    <div className="todo">
      <p>{props.todo.task}</p>
      <button className="delete-button">&#215;</button>
    </div>
  );
};

export default Todo;
