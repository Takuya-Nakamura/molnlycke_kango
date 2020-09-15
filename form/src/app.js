import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.scss';
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import KeyVisual from './components/key_visual'

export class Page extends React.Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <div className="key-visual__area">
                    <KeyVisual />
                </div>
                <Main />
                <Footer />
            </div>
        );
    }
}

