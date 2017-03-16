import React, { Component } from 'react';

import AddTodo from '/containers/add-todo';

import './App.css';


class App extends Component {
    render() {
        return (
          <div>
            <h1>hello world</h1>
            <AddTodo />
          </div>
        );
    }
}

export default App;
