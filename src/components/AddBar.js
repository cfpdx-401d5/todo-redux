import React from 'react';
import AddTodo from './AddTodo';

export default function AddBar(props) {
  return (
    <div>
      <AddTodo onAdd={props.onAdd}/>
    </div>
  );
}
