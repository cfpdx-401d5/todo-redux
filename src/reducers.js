import { combineReducers } from 'redux'; 
import { ADD_TODO, CLEAR_TODOS } from './actions';

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
    default:
      return state;
  }
};

export default combineReducers({ todos });
