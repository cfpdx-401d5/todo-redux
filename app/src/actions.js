// action types
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

//visibility filters
export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

//action creators
export function addTodo(text) {
    return { type: ADD_TODO, text };
}

/*
ADD_TODO - solicit text for new todo and add to end of array
DELETE_TODO - remove a todo
EDIT_TODO - supply a new "text" for a todo
COMPLETE_TODO - mark a todo as complete
COMPLETE_ALL - mark all of the todos as complete
CLEAR_COMPLETED - remove all completed todos from the array
*/
