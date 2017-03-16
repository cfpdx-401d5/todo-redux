//Action Types
export const ADD_TODO = 'ADD_TODO';
export const CLEAR_TODOS = 'CLEAR_TODOS';

//Action Creators
export function addTodo(text) {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  };
}

export function clearTodos() {
  return {
    type: CLEAR_TODOS,
    payload: {
      todos: []
    }
  };
};
