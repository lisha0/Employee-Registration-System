import React from 'react';
import { connect } from 'react-redux';
import createUser from '../redux/actions/createUser';
import UserForm from './UserForm';

class UserCreate extends React.Component{
    onSubmit = (formValues) => {
        this.props.createUser(formValues, this.props.history);
    }

    render(){
        return(
            <div className="container" style={{marginTop: "50px"}}>
                <h3>Create a User</h3>
                <UserForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null, {createUser})(UserCreate);