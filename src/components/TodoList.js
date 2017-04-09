import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

function TodoList(props) {
    return (
        <ul>
            {props.todos.map(todo => 
                <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>
    );
};