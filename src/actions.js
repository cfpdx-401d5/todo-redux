//Action Types
export const ADD_TODO = 'ADD_TODO';

//Action Creators
export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  };
}
