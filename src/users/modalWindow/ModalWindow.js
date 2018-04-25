import React from 'react';
import './ModalWindow.css';
import CompanyAdvertisement from '../../companies/Company_advertisement';

class ModalWindow extends React.Component {
    onModalClose() {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content col-10">
                    <span className="close text-right" onClick={this.onModalClose}>&times;</span>
                    <CompanyAdvertisement />
                </div>
            </div>
        );
    }
}

export default ModalWindow;