import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo, editTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete(todoId) {
      dispatch(deleteTodo(todoId));
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
          <input type='checkbox' checked={props.todo.completed} onChange={() => {
            props.onComplete(props.todo);
          }}/>
          <label>{props.todo.text}</label>
          <button onClick={(e) => {
            e.preventDefault();
            props.onDelete(
              props.todo.id
            );
          }}>X</button>
        </li>
  );
};

export default connect(null, mapDispatchToProps)(TodoItem);
