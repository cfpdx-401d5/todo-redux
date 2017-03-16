import React, { PropTypes } from 'react';
import Todo from './Todo';

export default function TodoList({ todos, onTodoClick }) {
    return (
        <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
                />
        )}
    </ul>
    );  
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        completed: PropTypes.bool,
        text: PropTypes.string
    })),
    onTodoClick: PropTypes.func
};
