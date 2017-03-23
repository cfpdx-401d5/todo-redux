import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading, visibilityFilter } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading,
    visibilityFilter
});
