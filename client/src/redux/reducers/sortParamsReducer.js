const initialState = {key: null, order: null};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORT_PARAMS':
            return {
                ...state,
                key: action.payload.key,
                order: action.payload.order
            };
        case 'USERLIST_SUCCESS':
            return initialState;
        default:
            return state;
    }

};

