import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import editUser from '../redux/actions/editUser';
import UserForm from './UserForm';

class UserEdit extends React.Component {
    onSubmit = (formValues) => {
        this.props.editUser(this.props.match.params.id, formValues, this.props.history)
    }
    render(){
        return(
            <div className="container" style={{marginTop: "50px"}}>
                <h3>Edit a Stream</h3>
                <UserForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.user,
                        'firstName','lastName','sex','age')}
                />
            </div>
        )     
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userList.users.filter(user => user._id === ownProps.match.params.id)[0]
    }

}

export default connect(mapStateToProps, {editUser})(UserEdit);