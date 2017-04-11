import React from 'react';
import { connect } from 'react-redux';
import { clearTodo, completeTodo, editTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete(todoId) {
            dispatch(clearTodo(todoId));
        },

        onComplete(todo) {
            dispatch(completeTodo(todo));
        },

        onEdit(todo) {
            dispatch(editTodo(todo));
        }
    };
};

function TodoItem(props) {
    return (
        <li>
            <input type='checkbox' onChange={() => {
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

export default connect(null, mapDispatchToProps)(TodoItem);