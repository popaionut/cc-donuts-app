import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {Donuts} from '/imports/db';
import DonutItem from './DonutItem';

class DonutsList extends React.Component {

    constructor() {
        super();
    }

    render() {
        const {isLoading, donuts} = this.props;

        if (isLoading) {
            return <div>Loading...</div>
        }

        return (
            <main className="cc-main-donuts">
                <div className="cc-donuts-table">
                    {
                        donuts.map(donut => {
                            return (
                                <DonutItem key={donut._id} donut={donut}/>
                            )
                        })
                    }
                    <a href="" onClick={() => FlowRouter.go('donuts.create')} className="cc-create-donut">Create a donut</a>
                </div>
            </main>
        )
    }
}

export default withTracker(() => {
    const handle = Meteor.subscribe('donuts');

    return {
        loading: !handle.ready(),
        donuts: Donuts.find().fetch()
    }
})(DonutsList);

