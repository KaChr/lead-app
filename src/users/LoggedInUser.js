import React from 'react';
import $ from 'jquery';
import './LoggedInUser.css';
import CompanyAdvertisement from '../companies/Company_advertisement';

class LoggedInUser extends React.Component {
    componentDidMount() {
        const angleUp = document.getElementById('angle-up');
        const angleDown = document.getElementById('angle-down');

        angleUp.style.display = "none";
        angleDown.style.display = "block";
    }

    onModalButtonClick() {
        const modal = document.getElementById('myModal');
        modal.style.display = "block";
    }

    onModalClose() {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
    }

    onShowFilter() {
        const angleUp = document.getElementById('angle-up');
        const angleDown = document.getElementById('angle-down');

        $("#filter").slideToggle();

        if(angleDown.style.display === "block") {
            angleDown.style.display = "none";
            angleUp.style.display = "block";
        } else {
            angleDown.style.display = "block";
            angleUp.style.display = "none";
        }
    }

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
                                <button className="btn btn-danger" onClick={this.onShowFilter}>Filter</button>
                            </div>
                            <div className="col-12 text-center logged-in-user-arrow-down">
                                <i id="angle-down" className="fa fa-angle-down"></i><i id="angle-up" className="fa fa-angle-up"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Filter section */}
                <div id="filter" className="row logged-in-user-company logged-in-user-intern-positions">
                    <div className="col-12">
                        <input type="checkbox" />&nbsp;Kategori
                    </div>
                    <div className="col-12">
                        <input type="checkbox" />&nbsp;Språk
                    </div>
                </div>

                <div className="row mt-5 mb-3 border border-secondary logged-in-user-company">
                    <div className="col-3 logged-in-user-padding"><a href="http://placeholder.com"><img src="http://via.placeholder.com/50x50" alt="test" /></a></div>
                    <div className="col-3 logged-in-user-padding"><span className="logged-in-user-link" onClick={this.onModalButtonClick}>Key Account Manager</span></div>
                    <div className="col-3 logged-in-user-padding logged-in-user-city"><i className="fa fa-map-marker-alt logged-in-user-icon"></i>&nbsp;Stockholm</div>
                    <div className="col-3 logged-in-user-padding logged-in-user-intern-positions">
                        <div className="row">
                            <div className="col-12 text-center logged-in-user-bold">
                                Praktikplats
                            </div>
                            <div className="col-12 text-center">
                                Upplagt 2 månader sen
                            </div>
                            <div className="col-12 text-center">
                            <i className="fa fa-star logged-in-user-background-yellow"></i>&nbsp;8/10
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 border border-secondary logged-in-user-company">
                    <div className="col-3 logged-in-user-padding"><a href="http://placeholder.com"><img src="http://via.placeholder.com/50x50" alt="test" /></a></div>
                    <div className="col-3 logged-in-user-padding"><span className="logged-in-user-link" onClick={this.onModalButtonClick}>Key Account Manager</span></div>
                    <div className="col-3 logged-in-user-padding logged-in-user-city"><i className="fa fa-map-marker-alt logged-in-user-icon"></i>&nbsp;Stockholm</div>
                    <div className="col-3 logged-in-user-padding logged-in-user-intern-positions">
                        <div className="row">
                            <div className="col-12 text-center logged-in-user-bold">
                                Praktikplats
                            </div>
                            <div className="col-12 text-center">
                                Upplagt 2 månader sen
                            </div>
                            <div className="col-12 text-center">
                            <i className="fa fa-star logged-in-user-background-yellow"></i>&nbsp;8/10
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3 border border-secondary logged-in-user-company">
                    <div className="col-3 logged-in-user-padding"><a href="http://placeholder.com"><img src="http://via.placeholder.com/50x50" alt="test" /></a></div>
                    <div className="col-3 logged-in-user-padding"><span className="logged-in-user-link" onClick={this.onModalButtonClick}>Key Account Manager</span></div>
                    <div className="col-3 logged-in-user-padding logged-in-user-city"><i className="fa fa-map-marker-alt logged-in-user-icon"></i>&nbsp;Stockholm</div>
                    <div className="col-3 logged-in-user-padding logged-in-user-intern-positions">
                        <div className="row">
                            <div className="col-12 text-center logged-in-user-bold">
                                Praktikplats
                            </div>
                            <div className="col-12 text-center">
                                Upplagt 2 månader sen
                            </div>
                            <div className="col-12 text-center">
                            <i className="fa fa-star logged-in-user-background-yellow"></i>&nbsp;8/10
                            </div>
                        </div>
                    </div>
                </div>
                
                {/************** Modal Window ***************/}
                <div id="myModal" className="modal">
                    <div className="modal-content col-10">
                        <span className="close" onClick={this.onModalClose}>&times;</span>
                        <CompanyAdvertisement />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoggedInUser;