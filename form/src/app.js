import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.scss';
import Header from './components/header'
import Footer from './components/footer'
import Main from './components/main'
import KeyVisual from './components/key_visual'
import MoveiModal from './components/movie_modal'


export class Page extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            //debug
            open: false
        }
    }

    componentDidMount = () => {
        setTimeout(this.modalClose, 7000)
    }
    modalClose = () => {
        this.setState({ open: false })
    };
    onClickClose = () => {
        this.setState({ open: false })
    }

    render() {
        var { open } = this.state

        var modal_style = {
            // // transition: "1s",
            opacity: open ? 1 : 0,
        }

        var contents_style = {
            transition: "2s",
            opacity: open ? 0 : 1,
        }

        return (
            <div className="container">
                {/* <Header /> */}


                <div className="modal_wrapper" style={modal_style}>
                    {open &&
                        <MoveiModal
                            open={open}
                            onClickClose={this.onClickClose}
                        />
                    }
                </div>

                <div style={contents_style}>
                    {!open &&
                        <div className="contents_wrapper" >
                            <div className="key-visual__area">
                                <KeyVisual />
                            </div>
                            <Main />
                            <Footer />
                        </div>
                    }
                </div>
            </div>
        );
    }
}

