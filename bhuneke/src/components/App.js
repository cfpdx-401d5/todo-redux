import React from 'react';
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

