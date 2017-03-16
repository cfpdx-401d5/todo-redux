import React from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
import ListActions from './components/ListActions';
import doFetch from './helpers';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            view: 'SHOW_ALL'
        };
        this.addTodo = this.addTodo.bind(this);
        this.getTodo = this.getTodo.bind(this);
    }

    componentDidMount() {
        this.getTodo();
    }

    getTodo() {
        doFetch({ method: 'GET', path: '/' })
            .then(res => {
                this.setState({
                    todos: res
                });
            })
            .catch(err => console.error('err: ', err));
    }

    addTodo(value) {
        return doFetch({ method: 'POST', path: '/', body: value })
            .then(res => {
                const newTodoList = this.state.todos.concat(res);
                this.setState({
                    bunnies: newTodoList
                });
            })
            .catch(err => console.error('err: ', err));
    }
    
    render() {
        return (
        <div>
            <NewTodo addTodo={this.addTodo} />
            <TodoList items={this.state.todos} />
            <ListActions />
        </div>
        );
    }
}
