import React from 'react';
import {AutoForm, AutoField, ErrorField, RadioField} from 'uniforms-unstyled';
import DonutsSchema from '/imports/db/donuts/schema';

export default class DonutsCreate extends React.Component {
    constructor() {
        super();
        this.donutId = FlowRouter.current().params._id;
        this.state = {
            donut: {},
            loading: true
        }
    }

    componentDidMount() {
        if (this.donutId) {
            Meteor.call('donut.find', this.donutId, (err, donut) => {
                this.setState({
                    donut,
                    loading: false
                })
            });
        }
    }

    onSubmit = (data) => {
        if (this.donutId) {
            Meteor.call('donut.edit', this.donutId, data, (err) => {
                if (!err) {
                    FlowRouter.go('donuts.list');
                }
            });
        } else {
            Meteor.call('donut.create', data, (err) => {
                if (!err) {
                    FlowRouter.go('donuts.list');
                }
            });
        }
    };

    render() {
        const {loading, donut} = this.state;
        if (loading && this.donutId) {
            return <div>Loading...</div>
        }

        return (
            <main className="cc-main-donuts">
                <AutoForm schema={DonutsSchema} onSubmit={this.onSubmit} model={donut} className="cc-save-donut-form">
                    <p className="cc-create-donut-title">Add a donut</p>
                    <p className="cc-create-donut-subtitle">don't take too long</p>

                    <label className="cc-select-donut-label">Select a donut!</label>

                    <div className="cc-donut-types">
                        <RadioField name="type" label={false} transform={() => ""}/>
                        <ErrorField name="type" className="cc-error-field"/>
                    </div>

                    <label className="cc-is-comestible-label">Can you eat this?</label>
                    <div className="cc-is-comestible">
                        <RadioField name="isComestible" label={false} transform={value => value ? 'Yes' : 'No'}/>
                    </div>

                    <AutoField name="name" label={false} className="cc-save-donut-input" placeholder="Name"/>
                    <ErrorField name="name" className="cc-error-field"/>

                    <AutoField name="price" label={false} className="cc-save-donut-input" placeholder="Price"/>
                    <ErrorField name="price" className="cc-error-field"/>

                    <button type="submit" className="cc-create-donut cc--width100 cc--margin-top15">
                        {this.donutId ? 'Edit donut' : 'Create donut'}
                    </button>
                </AutoForm>
            </main>
        )
    }
}