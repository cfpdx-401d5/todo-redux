import React, { Component } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.onAdd({
            id: new Date(),
            text: this.refs.text.value,
            completed: false
          });
        }}>
          <input ref='text' placeholder='New Item'/>
        </form>
      </div>
    );
  }
};
