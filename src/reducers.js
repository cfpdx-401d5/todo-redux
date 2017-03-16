import { combineReducers } from 'redux'; 
import { ADD_TODO, CLEAR_TODOS, DELETE_TODO } from './actions';

export function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: Date.now(),
        text: action.payload.text,
        completed: false
      }];
    case CLEAR_TODOS:
      return [];
    case DELETE_TODO:
      return state.filter(todo => {
        return todo.id !== action.payload.todoId;
      });
    default:
      return state;
  }
};

export default combineReducers({ todos });
