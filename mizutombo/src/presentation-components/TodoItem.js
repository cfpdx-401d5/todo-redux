import React, { PropTypes } from 'react';
import { deleteTodo, editTodo, completeTodo } from '../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => { 
  return {
    onDelete(todoId) {
      dispatch(deleteTodo(todoId));
    },

    onEdit(todo) {
      dispatch(editTodo(todo));
    },
    
    onComplete(todo) {
      dispatch(completeTodo(todo));
    }
  };
};

function TodoItem(props) { 
  return (
    <li>
      <input type='checkbox' checked={props.todo.complete} onChange={() => {
        props.onComplete(props.todo);
      }} />
      <label> {props.todo.text} </label>
      <button onClick={(event) => {
        event.preventDefault();
        props.onDelete(
          props.todo.id
        );
      }}> done </button> 
    </li>
  );
}

export default connect(mapDispatchToProps)(TodoItem);

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onComplete: PropTypes.func.isRequired,
};

/*const TodoItem = ({ onClick, completed, text}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}>
    {text}
)*/