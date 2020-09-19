
import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';


export default class MoveiModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open
        }
    }

    componentDidMount = () => {
        setTimeout(this.modalClose, 3500) //1秒後に閉じる
    }

    modalClose = () => {
        this.setState({ open: false })
    };

    render() {
        const { open } = this.state
        return (
            <Dialog
                open={open}
                maxWidth={'md'}
            >
                <DialogTitle >
                    <video id="vid" src="./images/movie.mp4" autoplay="true" muted="muted"></video>
                </DialogTitle>
                <DialogActions>
                    <div className="btn" onClick={() => this.modalClose()} color="primary">閉じる</div>
                </DialogActions>
            </Dialog>
        );
    }
}