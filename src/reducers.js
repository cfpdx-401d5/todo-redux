import { combineReducers } from 'redux'; 
import { ADD_TODO, CLEAR_TODOS, DELETE_TODO, COMPLETE_TODO } from './actions';

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
    case COMPLETE_TODO:
      let todo = Object.assign({}, action.payload.todo);
      todo.completed = !todo.completed;
      
      return state.map(t => {
        if (t.id === todo.id) {
          t = todo;
        };
        return t;
      });
    default:
      return state;
  }
};

export default combineReducers({ todos });
