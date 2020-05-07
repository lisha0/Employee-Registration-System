import { get, orderBy } from 'lodash';
const setSortParams = (sortKey, order) => {
    return {
        type: 'SET_SORT_PARAMS',
        payload: {
            key: sortKey,
            order: order
        }
    }
};


const sortUserList = (sortKey) => {
    return (dispatch, getState) => {
        //const sortParams = getState().sortParams.sortParams;
        const {sortParams, filter} = getState();
        
        const order = get(sortParams, 'order') ==='desc'?'asc':'desc';
        dispatch(setSortParams(sortKey, order));
        if (filter.query === ''){
            const users = getState().userList.users;
            const sortedUsers = orderBy(users, [sortKey], [order]);
            dispatch({
                type: 'SORT_USER_LIST',
                payload: sortedUsers
            })
        } else {
            const users = filter.filteredUsers;
            const sortedUsers = orderBy(users, [sortKey], [order]);
            dispatch({
                type: 'SORT_FILTERED_USER_LIST',
                payload: sortedUsers
            })
        }    
    };
};


export default sortUserList;