import React, { Component } from 'react';
import todos from '../data/todos';
import TodoList from './TodoList';
import AddBar from './AddBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(newTodo) {
    let newTodos = this.state.todos.slice();
    newTodos.push(newTodo);
    this.setState({
      todos: newTodos,
    });
  }
  
  render() {
    return (
      <div className='App'>
        <h1>Todo list:</h1>
        < TodoList todos={this.state.todos} />
        < AddBar onAdd={this.onAdd}/>
      </div>
    );
  }
}

export default App;
