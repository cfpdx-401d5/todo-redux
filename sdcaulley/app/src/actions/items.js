import fetcher from '../helpers';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function setVisibilityFilter(filter) {
    return { type: 'SET_VISIBILITY_FILTER', filter };
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsPostDataSuccess(items) {
    return {
        type: 'ITEMS_POST_DATA_SUCCESS',
        items
    };
}

export function itemsDeleteDataSuccess(items) {
    return {
        type: 'ITEMS_DELETE_DATA_SUCCESS',
        items
    };
}

export function itemsEditDataSuccess(items) {
    return {
        type: 'ITEMS_EDIT_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function itemsPostData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(item => dispatch(itemsPostDataSuccess(item)))
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function itemsDeleteData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(item => dispatch(itemsDeleteDataSuccess(item)))
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function itemsEditData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
        fetcher(options)
            .then(item => dispatch(itemsEditDataSuccess(item)))
            .then(dispatch(itemsIsLoading(false)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
