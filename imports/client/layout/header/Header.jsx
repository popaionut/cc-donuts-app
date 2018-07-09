import React, {Component} from 'react';
import Security from "../../../api/security";
import classNames from 'classnames';

class Header extends Component{

    constructor(){
        super();
    }

    checkLoggedIn(){
        return Security.checkLoggedIn(Meteor.userId());
    }

    handleLogout(){
        Meteor.logout(err => {
            if (!err) {
                FlowRouter.go('home');
            } else {
                alert(err.reason);
            }
        })
    }

    render(){
        const loggedIn = this.checkLoggedIn();
        const homeClassNames = classNames('cc-menu-item', {'cc-menu-item-selected': FlowRouter.current().route.name === 'home'});
        const donutsClassNames = classNames('cc-menu-item', {'cc-menu-item-selected': (FlowRouter.current().route.name === 'donuts.list' || FlowRouter.current().route.name === 'donuts.create')});
        const loginClassNames = classNames('cc-menu-item', {'cc-menu-item-selected': FlowRouter.current().route.name === 'login'});
        const registerClassNames = classNames('cc-menu-item', {'cc-menu-item-selected': FlowRouter.current().route.name === 'register'});

        return (
            <header className="cc-header">
                <section className="cc-header-logo"><span>donut&trade;</span></section>
                <ul className="cc-menu">
                    <li className={homeClassNames}>
                       <a href={FlowRouter.url("home")}><span>Home</span></a>
                    </li>
                    {loggedIn &&
                    <li className={donutsClassNames}>
                        <a href={FlowRouter.url("donuts")}><span>Donuts</span></a>
                    </li>
                    }
                    {loggedIn ||
                    <li className={loginClassNames}>
                        <a href={FlowRouter.url("login")}><span>Login</span></a>
                    </li>
                    }
                    {loggedIn &&
                    <li className="cc-menu-item">
                        <a href="" onClick={() => this.handleLogout()}><span>Logout</span></a>
                    </li>
                    }
                    {loggedIn ||
                    <li className={registerClassNames}>
                        <a href={FlowRouter.url("register")}><span>Register</span></a>
                    </li>
                    }
                </ul>
            </header>
        )
    }
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;