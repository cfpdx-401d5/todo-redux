import React from 'react';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

function TodoList(props) {
    return (
        <ul>
            {props.todos.map(todo => 
                <TodoItem key={todo.id} todo={todo} />)
            }
        </ul>
    );
};

export default connect(mapStateToProps)(TodoList);