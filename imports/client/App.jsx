import React from 'react';
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";

export default class App extends React.Component {
    constructor() {
        super();
    }

    render() {
        const {main, routeProps} = this.props;

        return (

            [
                <Header key="header"/>,
                React.createElement(main, {routeProps: routeProps, key: 'main'}),
                <Footer key="footer"/>
            ]

        )
    }
}