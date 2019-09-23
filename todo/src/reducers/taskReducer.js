export const initialState = [
  {
    task: 'Todo 1',
    completed: false,
    id: 0
  }
];

export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-TASK':
      return [
        ...state,
        { task: action.payload, completed: false, id: new Date() }
      ];
    default:
      return state;
  }
};
