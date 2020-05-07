const searchUserList = (query) => {
    return (dispatch, getState) => {
        const users = getState().userList.users;
        let filteredUsers = users;
        const queryLC = query.toLowerCase();
        if (queryLC !== '' && users.length!==0) {
            filteredUsers = users.filter(user => {
                return(
                    user.firstName.toLowerCase().includes(queryLC) || 
                    user.lastName.toLowerCase().includes(queryLC) ||
                    user.sex.toLowerCase().includes(queryLC) ||
                    user.age.toString().includes(queryLC)
                );
            });
        }
        dispatch( {
            type: 'SEARCH_USERS',
            payload: {
                query: query,
                filteredUsers: filteredUsers
            }
        });
    };
};

export default searchUserList;