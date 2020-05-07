
let initStat = {
    loading: false,
    users: [],
    error: null
};

const userListReducer = (state=initStat, action) => {
    switch (action.type) {
        case 'USERLIST_START':
            return {
                ...state,
                loading: true
            };
        case 'USERLIST_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            };
        case 'USERLIST_FAIL':
            return{
                ...state,
                loading: false,
                error: action.payload
            };
        case 'CREATE_START':
            return {
                ...state,
                loading: true
            }
        case 'CREATE_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            }
        case 'CREATE_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
         /*******************************************/ 
        case 'EDIT_START':
            return {
                ...state,
                loading: true
            } 
        case 'EDIT_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: null
            }
        case 'EDIT_FAIL':
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        /*******************************************/ 
        case 'DELETE_START':
            return {
                ...state,
                loading: true
            }
        case 'DELETE_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.payload,
                err: null
            }
        case 'DELETE_FAIL':
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        /*******************************************/ 
        case 'SORT_USER_LIST':
            return {
                ...state,
                loading: false,
                users: action.payload,
                err: null
            } 
        default:
            return state;
    }
}

export default userListReducer;