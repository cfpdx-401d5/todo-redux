// build reducer to control state changes ...

import {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
} from '../actions/actions';

const initialState = [
  {
    text: 'ToDo App with React & Redux',
    completed: false,
    id: 0
  }
];

export default function todoList(state = initialState, action) {

  switch (action.type) {

    case 'ADD_TODO':
      return [
        {
          id: Date.now(),
          text: action.text,
          completed: false
        },
        ...state
      ];

    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id
      );

    case 'EDIT_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case 'COMPLETE_TODO':
      return state.map(todo => 
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case 'COMPLETE_ALL':
      const allCompleted = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !allCompleted
      }));

    case 'CLEAR_COMPLETED':
      return state.filter(todo => todo.completed === false);

    default:
      return state;

  }

};
