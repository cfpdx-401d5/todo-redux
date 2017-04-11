import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearTodos } from '../actions.js';


const mapDispatchToProps = (dispatch) => {
  return {
    onClear() {
      dispatch(clearTodos());
    }
  };
};

class ClearTodos extends Component {
  render() {
    return (
      <button onClick={(e) => {
        e.preventDefault();
        this.props.onClear();
      }}>Clear All Todos</button>
    );
  }
}

export default connect(null, mapDispatchToProps)(ClearTodos);