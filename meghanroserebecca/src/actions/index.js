//comment made for sake of getting into git

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const completeTodo = (id) => {
    return {
        type: 'COMPLETE_TODO',
        id
    }
}