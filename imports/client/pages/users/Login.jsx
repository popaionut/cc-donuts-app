import React from 'react';
import {AutoForm, AutoField, ErrorField} from 'uniforms-unstyled';
import SimpleSchema from 'simpl-schema';

class Login extends React.Component {
    constructor() {
        super();
    }

    onSubmit = (data) => {
        const {email, password} = data;

        Meteor.loginWithPassword(email, password, (err) => {
            if (!err) {
                FlowRouter.go('donuts.list');
            } else {
                alert(err.reason);
            }
        });
    };

    render() {
        return (
            <main className="cc-main cc-user-main">
                <AutoForm schema={LoginSchema} onSubmit={this.onSubmit} className="cc-user-form">
                    <AutoField name="email" label={false} placeholder="Email" className="cc-user-form-input"/>
                    <ErrorField name="email" className="cc-error-field"/>

                    <AutoField name="password" type="password" label={false} placeholder="Password" className="cc-user-form-input"/>
                    <ErrorField name="password" className="cc-error-field"/>

                    <div className="cc-action-buttons">
                        <button type="button" className="cc-user-form-button" id="cc-forgot-password">
                            Forgot my password!
                        </button>
                        <button type="submit" className="cc-user-form-button cc-user-form-button-submit cc--right0">
                            Sign in
                        </button>
                    </div>
                </AutoForm>
            </main>
        )
    }
}

const LoginSchema = new SimpleSchema({
    email: {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    password: {type: String}
});

export default Login;