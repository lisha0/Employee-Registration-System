import { combineReducers } from 'redux';
import userListReducer from './userListReducer';
import sortParamsReducer from './sortParamsReducer';
import filterReducer from './filterReducer';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    userList: userListReducer,
    sortParams: sortParamsReducer,
    filter: filterReducer,
    form: formReducer
});
export default reducers;