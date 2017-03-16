import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete(todoId) {
      dispatch(deleteTodo(todoId));
    }
  };
};

function TodoItem(props) {
  return (
        <li>
          {props.todo.text}
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
