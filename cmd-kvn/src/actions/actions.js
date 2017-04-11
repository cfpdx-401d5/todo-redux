// Action types
export const ADD_TODO = 'ADD_TODO';


// Action creators
export const addTodoAction = (text) => {
    return {
        type: ADD_TODO,
        text
        // id: Date.now(), // this goes in the reducer to get added on submission
        // completed: false // this goes in the reducer to get added on submission
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};