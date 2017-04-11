export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_TODO = 'CLEAR_TODO';
export const CLEAR_ALL = 'CLEAR_ALL';
export const EDIT_TODO = 'EDIT_TODO';

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {
            text
        }
    };
}
export function completeTodo(text) {
    return {
        type: COMPLETE_TODO,
        payload: {
            text
        }
    };
}
export function completeAll(text) {
    return {
        type: COMPLETE_ALL,
        payload: {
            text
        }
    };
}
export function clearTodo(text) {
    return {
        type: CLEAR_TODO,
        payload: {
            text
        }
    };
}
export function clearAll(text) {
    return {
        type: CLEAR_ALL,
        payload: {
            text
        }
    };
}
export function editTodo(text) {
    return {
        type: EDIT_TODO,
        payload: {
            text
        }
    };
}