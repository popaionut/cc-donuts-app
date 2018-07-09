import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Register extends React.Component {
    constructor() {
        super();

    }

    onSubmit = (data) => {
        const {email, password} = data;

        Accounts.createUser({
            email,
            password,
        }, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            }
            else {
                alert(err.reason);
            }
        })
    };

    render() {
        return (
            <main className="cc-main cc-user-main">
                <AutoForm schema={RegisterSchema} onSubmit={this.onSubmit} className="cc-user-form">
                    <AutoField name="name" label={false} placeholder="Name" className="cc-user-form-input"/>
                    <ErrorField name="name" className="cc-error-field"/>

                    <AutoField name="email" label={false} placeholder="Email" className="cc-user-form-input"/>
                    <ErrorField name="email" className="cc-error-field"/>

                    <AutoField name="password" type="password" label={false} placeholder="Password"
                               className="cc-user-form-input"/>
                    <ErrorField name="password" className="cc-error-field"/>

                    <AutoField name="confirm_password" type="password" label={false} placeholder="Confirm password"
                               className="cc-user-form-input"/>
                    <ErrorField name="confirm_password" className="cc-error-field"/>

                    <button type="submit" className="cc-user-form-button cc-user-form-button-submit cc-user-register-button">
                        Sign up
                    </button>
                </AutoForm>
            </main>
        )
    }
}

const RegisterSchema = new SimpleSchema({
    name: {type: String},
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String},
    confirm_password: {
        type: String,
        custom() {
            if (this.value !== this.field('password').value) {
                return 'passwordMismatch';
            }
        }
    }
});

export default Register;