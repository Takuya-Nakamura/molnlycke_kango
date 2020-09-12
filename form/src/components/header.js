
import React from 'react';


export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-logo">
                    <img className="header-logo-image" src='./images/logo.png' />
                </div>
            </header>
        );
    }
}