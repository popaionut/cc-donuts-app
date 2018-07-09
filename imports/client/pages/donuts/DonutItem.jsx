import React, {Component} from 'react';

class DonutItem extends Component{

    constructor(props){
        super(props);
        this.removeDonut = this.removeDonut.bind(this);
        this.editDonut = this.editDonut.bind(this);
    }

    isDonutOwner = (donut) => {
        return donut.userId === Meteor.userId()
    };

    editDonut = (_id) => {
        FlowRouter.go('donuts.create', {_id: _id});
    };

    removeDonut = (_id) => {
        Meteor.call('donut.remove', _id);
    };

    render(){
        const { donut } = this.props;
        return (
            <div key={donut._id} className="cc-donut-item">
                <div className="cc-donut-item-description">
                    <div className={donut.type}></div>
                    <div className="cc-donut-name">
                        <p>{donut.name}</p>
                        <p>11.10.1998</p>
                    </div>
                </div>

                <div className="cc-donut-item-actions">
                    <span>{donut.price}</span>
                    <span>&#36;</span>
                    {this.isDonutOwner(donut) &&
                    <a href="" onClick={() => this.editDonut(donut._id)}><i className="fa fa-lg fa-pencil"/></a>}
                    {this.isDonutOwner(donut) &&
                    <a href="" onClick={() => this.removeDonut(donut._id)}><i className="fa fa-lg fa-trash"/></a>}
                </div>
                {/*<p>Is Comestible? : {donut.isComestible ? 'Yes' : 'No'}</p>*/}
            </div>
        );
    }
}

export default DonutItem;