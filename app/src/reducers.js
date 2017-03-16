import { VisibilityFilters, SET_VISIBILTY_FILTER, ADD_TODO } from './actions';
import { combineReducers } from 'redux';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILTY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;
