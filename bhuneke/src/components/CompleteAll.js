import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeAll } from '../actions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    onCompleteAll(todos) {
      dispatch(completeAll(todos));
    }
  };
};

class CompleteAll extends Component {
  render() {
    return (
      <button onClick={(e) => {
        e.preventDefault();
        this.props.onCompleteAll();
      }}>Mark All Complete</button>
    );
  }
};

export default connect(null, mapDispatchToProps)(CompleteAll);
