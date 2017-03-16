import React from 'react';
//import todos from '../data/todos';
import TodoList from './TodoList';
import SelectionBar from './SelectionBar';

export default function App(props) {

  return (
    <div className='App'>
      <h1>Todo list:</h1>
      < TodoList />
      < SelectionBar />
    </div>
  );
}

