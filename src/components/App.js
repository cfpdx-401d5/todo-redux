import React from 'react';
import TodoList from './TodoList';
import SelectionBar from './SelectionBar';

export default function App(props) {
    return (
       <div>
           <h1>Todo List</h1>
           < TodoList />
           < SelectionBar />
       </div>
    );
}
