import React from 'react';

export default function TodoList(props) {
    const todoList = props.items.map(item => {
        return <li key={item._id}>{item.text}</li>;
    });
    return (
        <ul>{todoList}</ul>
    );
}

TodoList.propTypes = {
    items: React.PropTypes.array
};
