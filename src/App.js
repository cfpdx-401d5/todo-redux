import React, { Component } from 'react';

import AddTodoForm from './components/AddTodoForm';
import List from './components/List';
import './App.css';


class App extends Component {
    render() {
        return (
          <div>
            <h1>hello world</h1>
            <AddTodoForm />
            <List />
          </div>
        );
    }
}

export default App;
