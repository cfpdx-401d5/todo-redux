import React from 'react';

export default function NewTodo(props) {
    return (
        <form>
            <input type='text' />
            <button onClick={props.addTodo}>Add Todo</button> 
        </form>
    );
}
