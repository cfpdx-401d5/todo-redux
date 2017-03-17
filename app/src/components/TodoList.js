import React from 'react';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteTodo = this.deleteTodo.bind(this);
    }

    deleteTodo(e) {
        this.props.onDelete({ method: 'DELETE', path: `/${e}` });
    }

    render() {
        const todoList = this.props.items.map(item => {
            return (<li key={item._id}>
                {item.text} 
                <button>Edit</button> 
                <button onClick={() => this.deleteTodo(item._id)}>Delete</button>
            </li>);
        });
        return (
            <ul>{todoList}</ul>
        );
    }   
}

TodoList.propTypes = {
    items: React.PropTypes.array,
    onDelete: React.PropTypes.func
};
