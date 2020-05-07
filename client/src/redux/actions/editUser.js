import axios from 'axios';

function editUserStart() {
    return {
        type: 'EDIT_START'
    };
};

function editUserSuccess(data) {
    return {
        type: 'EDIT_SUCCESS',
        payload: data
    }
}

function editUserFail(err) {
    return{
        type: 'EDIT_FAIL',
        payload: err
    }
}

function editUser(id, formValues, history) {
    return dispatch => {
        dispatch(editUserStart);
        const updatedUser = {user: formValues};
        axios.put(`http://localhost:3001/api/users/${id}`, updatedUser)
            .then(() => {
                axios.get('http://localhost:3001/api/users')
                    .then( res => {
                        dispatch(editUserSuccess(res.data.users));
                        history.push('/');
                    });                
            })
            .catch(err => {
                dispatch(editUserFail(err));
            });
    };
};

export default editUser;