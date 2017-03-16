import { combineReducers } from 'redux'; 
import { ADD_TODO } from './actions';

export function todos (state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {
        id: Date.now(),
        text: action.payload.text,
        completed: false
      }];
    default:
      return state;
  }
};

export default combineReducers({ todos });
