let nextTodoId = 0;

export default addTodoAction = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
        completed: false
    };
};