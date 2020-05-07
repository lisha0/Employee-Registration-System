import axios from 'axios';

function deleteUserStart(){
    return {
        type: 'DELETE_START'
    };
};

function deleteUserSuccess(res){
    return {
        type: 'DELETE_SUCCESS',
        payload: res
    };
};

function deleteUserFail(err) {
    return {
        type: 'DELETE_FAIL',
        payload: err
    };
};

function deleteUser(id) {
    return (dispatch) => {    
        dispatch(deleteUserStart);
        axios.delete(`http://localhost:3001/api/users/${id}`)
            .then( ()=>{
                axios.get('http://localhost:3001/api/users')
                    .then(res => {
                        dispatch(deleteUserSuccess(res.data.users));
                    });
            })
            .catch( err => {
                dispatch(deleteUserFail(err));
            });
    };
};

export default deleteUser;
