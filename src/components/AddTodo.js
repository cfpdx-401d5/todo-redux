import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const mapDispatchToProps = (disatch) => {
    return {
        onAdd(newTodo) {
            dispatch(onAdd(newTodo));
        }
    };
};

class AddTodo extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.props.onAdd(
                            this.refs.text.value
                    );
                }}>
                    <input ref='text' placeholder='add todo!'/>
                </form>
            </div>
        );
    }
};

export default connect(null, mapDispatchToProps);
