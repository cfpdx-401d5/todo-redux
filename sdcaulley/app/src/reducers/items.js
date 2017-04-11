import { VisibilityFilters } from '../actions/items';

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        case 'ITEMS_POST_DATA_SUCCESS':
            const newItemArray = state.concat(action.items);
            console.log('newItemArray: ', newItemArray);
            return newItemArray;
        case 'ITEMS_DELETE_DATA_SUCCESS':
            const delItemArray = state.filter(item => { //eslint-disable-line
                if (item._id !== action.items.id) {
                    return item;
                }
            });
            return delItemArray;
        case 'ITEMS_EDIT_DATA_SUCCESS':
            const editItemArray = state.map(item => { //eslint-disable-line
                if (item._id === action.items._id) {
                    return action.items;
                } else {
                    return item;
                }
            });
            return editItemArray;
        default:
            return state;
    }
}

export function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}
