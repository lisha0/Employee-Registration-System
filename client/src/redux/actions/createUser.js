import axios from 'axios';

function createUserStart(){
    return {
        type: 'CREATE_START'
    };
};

function createUserSuccess(data){
    return {
        type: 'CREATE_SUCCESS',
        payload: data
    };
};

function createUserFail(error){
    return{
        type: 'CREATE_FAIL',
        payload: error
    }
}

const createUser = (formValues, history) => {
    return dispatch => {
        dispatch(createUserStart);
        const newUser = {user: formValues}
        axios.post('http://localhost:3001/api/users/new', newUser)
            .then(() => {
                    axios.get('http://localhost:3001/api/users')
                        .then( res => {
                            dispatch(createUserSuccess(res.data.users));
                            history.push('/');
                        }); 
            })
            .catch(err => {
                dispatch(createUserFail(err));
            });
    };
};

export default createUser;