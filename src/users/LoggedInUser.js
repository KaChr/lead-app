import React from 'react';
import './LoggedInUser.css';

class LoggedInUser extends React.Component {
    render() {
        return (
            <div className="container logged-in-user">
                <div className="row">
                    <div className="col-12 mb-3 logged-in-user-header">Logged In User</div>
                    <div className="col-12 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor optio minima nihil ut dolorum quaerat est tempore, nobis quia aliquid. Quisquam fugit porro nam consectetur maxime quae velit eius a?</div>
                </div>
                <div className="row">
                    <div className="col-9">
                        <input type="text" className="form-control border border-danger" aria-describedby="searchField" placeholder="Sök" />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-outline-danger"><i className="fa fa-search"></i></button>
                    </div>
                    <div className="col-2">
                        <div className="row">
                            <div className="col-12 text-center">
                                <button className="btn btn-danger">Filter</button>
                            </div>
                            <div className="col-12 text-center logged-in-user-arrow-down">
                                <i className="fa fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row border border-secondary">
                    <div className="col-3">LOGO</div>
                    <div className="col-3">Key Account Manager</div>
                    <div className="col-3">Stockholm</div>
                    <div className="col-3">Praktikplats</div>
                </div>
            </div>
        );
    }
}

export default LoggedInUser;