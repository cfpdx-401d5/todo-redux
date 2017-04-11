import React from 'react';
import { connect } from 'react-redux';
import { itemsEditData } from '../actions/items';


class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.item._id,
            text: this.props.item.text,
            completed: this.props.item.completed
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.editTodo = this.editTodo.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleFormChange(e) {
        this.setState({ text: e.target.value });
    }

    handleCancel(e) {
        e.preventDefault();
        this.props.onDisplay();
    }

    editTodo(e) {
        e.preventDefault();

        const formPayload = {
            text: this.state.text,
            completed: this.state.completed
        };

        this.props.editData({ method: 'PUT', path: `/${this.props.item._id}`, body: formPayload });
    }

    render() {
        return (
            <form>
                <input type='text' onChange={this.handleFormChange} content={this.state.text} placeholder={this.props.item.text} />
                <button onClick={this.editTodo}>Submit</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editData: (options) => dispatch(itemsEditData(options)),
    };
}

export default connect(null, mapDispatchToProps)(EditTodo);

EditTodo.propTypes = {
    item: React.PropTypes.object,
    onDisplay: React.PropTypes.func,
    editData: React.PropTypes.func
};
