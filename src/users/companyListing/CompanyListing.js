import React from 'react';
import { connect } from 'react-redux';
import { getCompanyAdvertisementAction } from '../../actions/companyAdvertisementAction';
import './CompanyListing.css';

class CompanyListing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: [
                {id: 1, val1: 'test1', val2: 'test2'},
                {id: 2, val1: 'flummo1', val2: 'flummo2'},
                {id: 3, val1: 'dummo1', val2: 'dummo2'}
            ]
        };

        this.onModalButtonClick = this.onModalButtonClick.bind(this);
    }

    onModalButtonClick(event) {
        this.props.onGetCompanyAdvertisementAction(event);
    }

    render() {
        return (
            <div>
            {this.state.companies.map((company) => (
                <div key={company.id}>
                <div className="row mt-5 mb-3 border border-secondary company-listing-main">
                <div className="col-3 my-auto company-listing-padding"><a href="http://placeholder.com"><img src="http://via.placeholder.com/50x50" alt="test" /></a></div>
                <div className="col-3 my-auto company-listing-padding">
                    <div className="row">
                        <div className="col-12">
                        <button type="button" onClick={() => this.onModalButtonClick(company)} className="btn btn-link pl-0 pr-0 pt-0 pb-0" data-toggle="modal" data-target="#myModal"><span className="company-listing-main">Key Account Manager</span></button>
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
            </div>
            ))}
            </div>
        );
    }
}

const mapActionsToProps = {
    onGetCompanyAdvertisementAction: getCompanyAdvertisementAction
};

export default connect(null, mapActionsToProps)(CompanyListing);