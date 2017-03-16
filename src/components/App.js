import React, { Component } from 'react';
import todos from '../data/todos';
import TodoList from './TodoList';
import AddBar from './AddBar';
import { connect } from 'react-redux';
import { addTodo } from '../actions.js';

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd(newTodoText) {
      dispatch(addTodo(newTodoText));
    }
  };
};

function App(props) {

  return (
    <div className='App'>
      <h1>Todo list:</h1>
      < TodoList todos={props.todos} />
      < AddBar onAdd={props.onAdd}/>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
