import React, { useReducer } from 'react';
import { taskReducer, initialState } from './reducers/taskReducer';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  return (
    <div className="App">
      <Form taskReducer={dispatch} />
      <TodoList state={state} />
    </div>
  );
}

export default App;
