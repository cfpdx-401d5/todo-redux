import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {todos: state.todos};
};

let List = (props) => {
    return (
        <ul>
            {props.todos.map(x => {
                return <li key={x.id}>{x.text}</li>;
            })}
        </ul>
    );
};

List = connect(mapStateToProps)(List);

export default List;
