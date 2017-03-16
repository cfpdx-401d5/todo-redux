import React from 'react';
import AddTodo from './AddTodo';
import ClearTodos from './ClearTodos';

export default function SelectionBar(props) {
  return (
    <div>
      <AddTodo onAdd={props.onAdd}/>
      <ClearTodos onClear={props.onClear} />
    </div>
  );
}
