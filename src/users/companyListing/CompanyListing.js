import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getCompanyAdvertisementAction } from '../../actions/companyAdvertisementAction';
import './CompanyListing.css';

class CompanyListing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: []
        };

        this.onModalButtonClick = this.onModalButtonClick.bind(this);
    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        Promise.all([axios.get(`${process.env.REACT_APP_API_BASE_URL}/listings`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }), axios.get(`${process.env.REACT_APP_API_BASE_URL}/cities`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })])
            .then((results) => {
                let lists = results[0].data;
                let cities = results[1].data;
                let citiesListsMerged = [];

                for (let i = 0; i < lists.length; i++) {
                    // console.log(lists[i]);
                    for (let j = 0; j < lists[i].Company.Listings.length; j++) {
                        let listTemp = lists[i].Company.Listings[j];
                        listTemp.email = lists[i].email;
                        listTemp.information = lists[i].Company.information;
                        listTemp.logo_url = lists[i].Company.logo_url;
                        listTemp.name = lists[i].Company.name;
                        listTemp.phone = lists[i].Company.phone;
                        listTemp.postal_code = lists[i].Company.postal_code;
                        listTemp.street_adress = lists[i].Company.street_adress;
                        listTemp.website = lists[i].Company.website;
                        listTemp.city_id = lists[i].Company.city_id;
                        citiesListsMerged.push(listTemp);
                    }
                }

                for (let i = 0; i < citiesListsMerged.length; i++) {
                    for (let j = 0; j < cities.length; j++) {
                        const cityIdTemp = citiesListsMerged[i].city_id;
                        if (cityIdTemp === cities[j].id) {
                            citiesListsMerged[i]['city_name'] = cities[j].city_name;
                            break;
                        }
                    }
                }

                console.log(citiesListsMerged);

                this.setState({
                    companies: citiesListsMerged
                });
            })
            .catch((err) => {
                console.log(err);
            });
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
                            <div className="col-12 col-sm-3 my-auto company-listing-padding company-listing-text-center"><a href={company.website}><img className="company-listing-logo-dimension" src={company.logo_url} alt={company.logo_url} /></a></div>
                            <div className="col-12 col-sm-3 my-auto company-listing-padding">
                                <div className="row">
                                    <div className="col-12 company-listing-text-center">
                                        <button type="button" onClick={() => this.onModalButtonClick(company)} className="btn btn-link pl-0 pr-0 pt-0 pb-0" data-toggle="modal" data-target="#myModal"><span className="company-listing-main">{company.name}</span></button>
                                    </div>
                                    <div className="col-12 mt-2 company-listing-text-center company-listing-intern-positions">
                                        <div className="company-listing-max-text-length">{company.information_listing}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-3 my-auto company-listing-padding company-listing-city company-listing-text-center"><i className="fa fa-map-marker-alt company-listing-icon"></i>&nbsp;{company.city_name}</div>
                            <div className="col-12 col-sm-3 my-auto company-listing-padding company-listing-intern-positions">
                                <div className="row">
                                    <div className="col-12 company-listing-bold company-listing-text-center">
                                        Praktikplats
                        </div>
                                    <div className="col-12 mt-2 company-listing-text-center">
                                        Upplagt
                        </div>
                                    <div className="col-12 company-listing-text-center">
                                        {company.pub_date}
                                    </div>
                                    <div className="col-12 mt-2 company-listing-text-center">
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