import React from 'react';
import './ModalWindow.css';

class ModalWindow extends React.Component {
    render() {
        return (
            <div className="modal fade bs-example-modal-lg" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            {this.props.component}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Stäng</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalWindow;