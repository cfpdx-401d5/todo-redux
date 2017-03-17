import React from 'react';

export default class NewTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            completed: false
        };
        this.createNewTodo = this.createNewTodo.bind(this);
        this.handleText = this.handleText.bind(this);
    }

    handleText(e) {
        this.setState({ text: e.target.value });
    }

    createNewTodo(e) {
        e.preventDefault();

        const formPayload = {
            text: this.state.text,
            completed: false
        };

        this.props.addTodo({ method: 'POST', path: '/', body: formPayload });
    }

    render() {
        return (
            <form>
                <input type='text' onChange={this.handleText}/>
                <button onClick={this.createNewTodo}>Add Todo</button> 
            </form>
        );
    }
}

NewTodo.propTypes = {
    addTodo: React.PropTypes.func
};
