import React from 'react';
import EditTodo from './EditTodo';

function Buttons(props) {
    return (
        <div>
            <button onClick={() => props.onEdit()}>Edit</button> 
            <button onClick={() => props.onDelete(props.item._id)}>Delete</button>
        <div>
            {props.isEditable && <EditTodo item={props.item} onDisplay={props.onEdit} editData={props.editData} />}
        </div>
    </div>
    );  
}

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editForm = this.editForm.bind(this);
    }

    editForm() {
        this.setState({
            isEditable: !this.state.isEditable
        });
    }

    deleteTodo(e) {
        this.props.onDelete({ method: 'DELETE', path: `/${e}` });
    }

    render() {
        const todoList = this.props.items.map(item => {
            return (
            <li key={item._id}>
                {item.text} 
                <Buttons onDelete={this.deleteTodo} 
                    item={item} 
                    onEdit={this.editForm} 
                    isEditable={this.state.isEditable} 
                    editData={this.props.editData} />
            </li>
            );
        });
        return (
            <ul>{todoList}</ul>
        );
    }   
}

TodoList.propTypes = {
    items: React.PropTypes.array,
    onDelete: React.PropTypes.func,
    editData: React.PropTypes.func
};

Buttons.propTypes = {
    item: React.PropTypes.object,
    onDelete: React.PropTypes.func,
    isEditable: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    editData: React.PropTypes.func
};
