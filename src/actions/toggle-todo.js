export default toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
};