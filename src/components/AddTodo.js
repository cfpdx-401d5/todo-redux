import React, { Component } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onAdd(
            this.refs.text.value
          );
        }}>
          <input ref='text' placeholder='New Item'/>
        </form>
      </div>
    );
  }
};
