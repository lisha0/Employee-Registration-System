import React from 'react';
import { Field, reduxForm} from 'redux-form';
import "./UserForm.css"


class UserForm extends React.Component {
    renderError({ error, touched } ) {
        if (touched && error) {
            return (
                <div className="error">
                    <div>{error}</div>
                </div>
            );
        }
    };
    renderInput = ({ input, label, type, meta}) => {
        return(
            <div className="form-group row">
                <label className="col-sm-2 col-form-label">
                    {label} 
                </label>
                <input 
                    {...input}
                    type={type}
                    autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        );
    };
    

    onSubmit = formValues => {
        console.log(formValues);
        this.props.onSubmit(formValues);
    };

    render(){
        return(
            <div className="user-form">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field 
                        name="firstName"
                        component={this.renderInput}
                        label='First Name'>
                    </Field>
                    <Field
                        name="lastName"
                        component={this.renderInput}
                        label="Last Name"
                    />
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Sex</label>
                        <Field
                            name="sex"
                            component="select">
                                <option></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                        </Field>
                    </div>             
                    <Field
                        name="age"
                        component={this.renderInput}
                        label="Age"
                        type="number">   
                    </Field>
                    <Field
                        name="password"
                        component={this.renderInput}
                        type="password"
                        label="Password"
                    ></Field>
                    <Field
                        name="repeatPassword"
                        component={this.renderInput}
                        type="password"
                        label="Repeat"
                    ></Field>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = formValues => {
    const errors ={};
    if (!formValues.firstName) {
        errors.firstName = "Please fill your first name.";
    }
    if (!formValues.lastName) {
        errors.lastName = "Please fill your last name.";
    }
    //if (formValues.sex!=='Male' || formValues.sex !== 'Female') {
    if (!formValues.sex){
        errors.sex = "Please select your sex."
    }
    if (!formValues.age) {
        errors.age = "Please fill your age."
    } else if (isNaN(Number(formValues.age))){
        errors.age = "Age must be a number."
    }


    // Minimum six characters, at least one letter and one number:
    const passwordProto = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    if(!formValues.password){
        errors.password = 'Please fill your password.';
    } else if (!formValues.password.match(passwordProto)){
        errors.password = "Minimum six characters, at least one letter and one number";
    }
    if(!formValues.repeatPassword) {
        errors.repeatPassword = "Please repeat your password."
    } else if (formValues.repeatPassword !== formValues.password){
        errors.repeatPassword = "The repeated password is not same as the first input."
    }
    return errors;
};

export default reduxForm({
    form: 'userForm',
    validate
})(UserForm);