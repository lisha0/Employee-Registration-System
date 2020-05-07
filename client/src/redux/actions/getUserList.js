import axios from 'axios';

function getUserListStart() {
    return {
        type: 'USERLIST_START'
    };
};

function getUserListSuccess(data) {
    return {
        type: 'USERLIST_SUCCESS',
        payload: data
    };
};

function getUserListFail(error) {
    return {
        type: 'USERLIST_FAIL',
        payload: error
    };
};

const getUserList = () => {
    return (dispatch) => {
        dispatch(getUserListStart());
        axios.get('http://localhost:3001/api/users')
            .then(res => {
                console.log("load data succeed");
                dispatch(getUserListSuccess(res.data.users));
            })
            .catch(err => {
                console.log("load data failed");
                dispatch(getUserListFail(err));
            });
    };
};

export default getUserList;