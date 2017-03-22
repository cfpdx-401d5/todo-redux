import { combineReducers } from 'redux';

import { ADD_TODO } from '../actions/actions';

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            // do 'setState()'
            return [...state, {
                text: action.text,
                id: Date.now(),
                completed: false
            }
            ];
        // case /*OTHER STATES */
        default: return state;

    }
};

const reducers = combineReducers({ todos });

export default reducers;

