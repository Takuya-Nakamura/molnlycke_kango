import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.scss';
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'

export class Page extends React.Component {
    render() {
        return (
            <div>
                <div>test</div>

                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}

