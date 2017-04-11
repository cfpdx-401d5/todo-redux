import { connect } from 'react-redux';

import addTodoAction from '../actions/add-todo-action';
import AddTodoForm from '../components/AddTodoForm';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (text) => {
            dispatch(addTodoAction(text));
        }
    };
};

let AddTodo = connect(null, mapDispatchToProps)(AddTodoForm);

export default AddTodo;