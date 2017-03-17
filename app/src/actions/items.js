import fetcher from '../helpers';

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

export function itemsFetchData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                dispatch(itemsIsLoading(false));

                return res;
            })
            .then(res => res.json())
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function itemsPostData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                dispatch(itemsIsLoading(false));

                return res;
            })
            .then(res => res.json())
            .then(item => dispatch(itemsPostDataSuccess(item)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

export function itemsDeleteData(options) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetcher(options)
            .then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }

                dispatch(itemsIsLoading(false));

                return res;
            })
            .then(res => res.json())
            .then(item => dispatch(itemsDeleteDataSuccess(item)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}
