import React, { PropTypes } from 'react';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }} >
        <input ref={node => {
          input = node;
        }} />
        <button type='submit'>
          Add Todo Item
        </button>
      </form>
    </div>
  );
};

AddTodo = connect()(AddTodo);

// AddTodo.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

export default AddTodo;
