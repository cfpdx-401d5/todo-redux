import React from 'react';
import { connect } from 'react-redux';
import { clearTodo, completeTodo, editTodo } from '../actions';

function TodoItem(props) {
    return (
        <li>
            <input type='checkbox' checked={props.todos.completed} onChange={() => {
                props.onComplete(props.todo);
            }}/>
            <label>{props.todo.text}</label>
            <button onClick={(e) => {
                e.preventDefault();
                props.onDelete(
                    props.todo.id
                );
            }}>Delete</button>
        </li>
    );
};