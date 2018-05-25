import React from 'react';

class ButtonEditProfile extends React.Component {
    render() {
        return (
            <div className="row justify-content-end ButtonEditProfile">
                <div className="col-2">
                    <a href="#"><button className=" btn btn-danger"><i className="fas fa-pencil-alt"></i>Redigera</button></a>
                </div>
            </div>
        );
    }
}

export default ButtonEditProfile;