import React from 'react';
import { connect } from 'react-redux';
import { itemsDeleteData } from '../actions/items';
import EditTodo from './EditTodo';

function Buttons(props) {
    return (
        <div>
            <button onClick={() => props.onEdit()}>Edit</button> 
            <button onClick={() => props.onDelete(props.item._id)}>Delete</button>
        <div>
            {props.isEditable && <EditTodo item={props.item} onDisplay={props.onEdit} />}
        </div>
    </div>
    );  
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditable: false,
        };
        this.deleteTodo = this.deleteTodo.bind(this);
        this.editForm = this.editForm.bind(this);
        this.listView = this.listView.bind(this);
    }

    listView(filter, todos) {
        switch (filter) {
            case 'SHOW_ALL':
                return todos;
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed);
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed);
            default:
                return todos.filter(t => !t.completed);
        }
    }

    editForm() {
        this.setState({
            isEditable: !this.state.isEditable
        });
    }

    deleteTodo(e) {
        this.props.deleteData({ method: 'DELETE', path: `/${e}` });
    }

    render() {
        const todoList = this.listView(this.props.filter, this.props.items).map(item => {
            return (
            <li key={item._id}>
                <input type='checkbox' />
                {item.text} 
                <Buttons onDelete={this.props.deleteData} 
                    item={item} 
                    onEdit={this.editForm} 
                    isEditable={this.state.isEditable} />
            </li>
            );
        });
        return (
            <ul>{todoList}</ul>
        );
    }   
}

function mapStateToProps(state) {
    return {
        items: state.items,
        filter: state.visibilityFilter
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteData: (options) => dispatch(itemsDeleteData(options)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

TodoList.propTypes = {
    items: React.PropTypes.array,
    deleteData: React.PropTypes.func,
    editData: React.PropTypes.func,
    editForm: React.PropTypes.func,
    filter: React.PropTypes.string
};

Buttons.propTypes = {
    item: React.PropTypes.object,
    onDelete: React.PropTypes.func,
    isEditable: React.PropTypes.bool,
    onEdit: React.PropTypes.func,
    editData: React.PropTypes.func
};
