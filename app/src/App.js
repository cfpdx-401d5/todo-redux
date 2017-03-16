import React, { Component } from 'react';
import TodoList from './views/TodoList';
import ListButtons from './views/ListButtons';
//import './App.css';

class App extends Component {
    render() {
        return (
          <div>
            <TodoList />
            <ListButtons />
          </div>
            
        );
    }
}

export default App;
