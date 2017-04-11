import React from 'react';
import { connect } from 'react-redux';

import { addTodoAction } from '../actions/actions';

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSubmit: (text) => {
//             dispatch(addTodoAction(text));
//         }
//     };
// };

let AddTodoForm = (props) => { // (prop) can be destructured to ({onSubmit})

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                // props.onSubmit(text)
                props.dispatch(addTodoAction(e.target.elements.todo.value));
            }}>
                <input name='todo'/>
                <button type='submit'>Add Todo</button>
            </form>
                
        </div>
    );
};

AddTodoForm = connect(/* mapStateToProps|null, mapDispatchToProps */)(AddTodoForm);

export default AddTodoForm;