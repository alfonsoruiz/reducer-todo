import React from 'react';
import Todo from './Todo';

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.state.todos.map(todo => {
        return (
          <Todo todo={todo} key={todo.id} taskReducer={props.taskReducer} />
        );
      })}
    </div>
  );
};

export default TodoList;
