import React from 'react';
//import todos from '../data/todos';
import TodoList from './TodoList';
import SelectionBar from './SelectionBar';
import { connect } from 'react-redux';
import { addTodo, clearTodos } from '../actions.js';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd(newTodoText) {
      dispatch(addTodo(newTodoText));
    },

    onClear() {
      dispatch(clearTodos());
    }
  };
};

function App(props) {

  return (
    <div className='App'>
      <h1>Todo list:</h1>
      < TodoList todos={props.todos} />
      < SelectionBar onAdd={props.onAdd} onClear={props.onClear} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
