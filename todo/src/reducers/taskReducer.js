export const initialState = {
  todos: [
    {
      task: 'Todo 1',
      completed: true,
      id: 0
    }
  ]
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-TASK':
      return {
        ...state,
        todos: [
          ...state.todos,
          { task: action.payload, completed: false, id: new Date() }
        ]
      };

    case 'TOGGLE-COMPLETE':
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => {
            if (action.payload.id === todo.id) {
              return {
                ...todo,
                completed: !todo.completed
              };
            } else {
              return todo;
            }
          })
        ]
      };

    case 'DELETE-COMPLETED':
      return {
        ...state,
        todos: [...state.todos.filter(todo => !todo.completed)]
      };

    default:
      return state;
  }
};
