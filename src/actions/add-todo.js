let nextTodoId = 0;

export default addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
        completed: false
    };
};