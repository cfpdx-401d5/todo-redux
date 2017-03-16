import React, { Component } from 'react';

export default class ClearTodos extends Component {
  render() {
    return (
      <button onClick={(e) => {
        e.preventDefault();
        this.props.onClear();
      }}>Clear All Todos</button>
    );
  }
}
