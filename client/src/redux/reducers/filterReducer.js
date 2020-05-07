const initialState = {query: '', filteredUsers: []};

function filterReducer(state=initialState, action) {
    switch(action.type) {
        case 'SEARCH_USERS':
            return {
                ...state,
                query: action.payload.query,
                filteredUsers: action.payload.filteredUsers
            };
        case 'SORT_FILTERED_USER_LIST':
            return {
                ...console,
                filteredUsers: action.payload
            }
        default:
            return state;
    };
};

export default filterReducer;
