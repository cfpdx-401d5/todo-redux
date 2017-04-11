import { combineReducers } from 'redux';
import { ADD_TODO, COMPLETE_TODO, COMPLETE_ALL, CLEAR_TODO, CLEAR_ALL, EDIT_TODO } from './actions';

export function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: Date.now(),
                text: action.payload.text,
                completed: false
            }];
        case COMPLETE_TODO:
            let todo = Object.assign({}, action.payload.todo);
            todo.completed = !todo.completed;

            return state.map(t => {
                if (t.id === todo.id) {
                    t = todo
                };
                return t;
            });
        case COMPLETE_ALL:
            return state.map(todo => {
                todo.completed = true;
                return todo;
            });
        case CLEAR_TODO:
            return state.filter(todo => {
                return todo.id !== action.payload.todoId;
            });
        case CLEAR_ALL:
            return [];
        case EDIT_TODO:
            let editTodo = Object.assign({}, action.payload.todo);
            editTodo.text = action.payload.todo.text;

            return state.map(t => {
                if (t.id === editTodo.id) {
                    t = editTodo;
                };
                return t;
            }
        );
        default:
            return state;
    }
};

export default combineReducers({ todos });