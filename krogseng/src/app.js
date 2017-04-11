import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import { TodoList } from './components';
import { TodoList } from './containers';
import reducer from './reducer';
import { List, Map } from 'immutable';

const starterTodos = List([
    Map({
        id: 0,
        isDone: true,
        text: 'making components'
    }),
    Map({
        id: 1,
        isDone: false,
        text: 'do the actions'
    }),
    Map({
        id: 2,
        isDone: false,
        text: 'make a reducer'
    }),
    Map({
        id: 3,
        isDone: false,
        text: 'connect components'
    }),
    Map({
        id: 4,
        isDone: false,
        text: 'delete stuff'
    })
]);

const store = createStore(reducer);

render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app')
);