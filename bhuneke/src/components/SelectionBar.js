import React from 'react';
import AddTodo from './AddTodo';
import ClearTodos from './ClearTodos';
import CompleteAll from './CompleteAll';

export default function SelectionBar(props) {
  return (
    <div>
      <AddTodo />
      <ClearTodos />
      <CompleteAll />
    </div>
  );
}

