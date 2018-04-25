import React from 'react';
import './CompanyListing.css';

class CompanyListing extends React.Component {
    onModalButtonClick() {
        const modal = document.getElementById('myModal');
        modal.style.display = "block";
    }

    render() {
        return (
            <div className="row mt-5 mb-3 border border-secondary company-listing-main">
                <div className="col-3 my-auto company-listing-padding"><a href="http://placeholder.com"><img src="http://via.placeholder.com/50x50" alt="test" /></a></div>
                <div className="col-3 my-auto company-listing-padding">
                    <div className="row">
                        <div className="col-12">
                            <span className="company-listing-link" onClick={this.onModalButtonClick}>Key Account Manager</span>
                        </div>
                        <div className="col-12 mt-2 company-listing-intern-positions">
                            Do voluptate magna adipisicing deserunt.
                        </div>
                    </div>
                </div>
                <div className="col-3 my-auto company-listing-padding company-listing-city"><i className="fa fa-map-marker-alt company-listing-icon"></i>&nbsp;Stockholm</div>
                <div className="col-3 my-auto company-listing-padding company-listing-intern-positions">
                    <div className="row">
                        <div className="col-12 text-center company-listing-bold">
                            Praktikplats
                        </div>
                        <div className="col-12 mt-2 text-center">
                            Upplagt 2 månader sen
                        </div>
                        <div className="col-12 text-center">
                        <i className="fa fa-star company-listing-background-yellow"></i>&nbsp;8/10
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CompanyListing;