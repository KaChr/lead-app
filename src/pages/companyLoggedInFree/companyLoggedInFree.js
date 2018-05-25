import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './companyLoggedInFree.css';


import Button from '../../Components/Button/Button';
import '../../Components/Button/Button.css';
import { Authorization } from '../../Components/Helper/Authorization';



class companyLoggedInFree extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            companyListing: [],
            role: "company"
        }

    }

    componentDidMount() {
        Authorization(this);


        const token = localStorage.getItem('token');
        console.log(token);

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/verify-token`, null, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })

            .then((res) => {
                console.log('Hej 1');
                console.log(res.data);
                axios.get(`${process.env.REACT_APP_API_BASE_URL}/company-listings/${res.data.userId}`, {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then((res2) => {
                    console.log('Hej 2');
                    console.log(res2.data.Company.Listings);
                    this.setState({
                        companyListing: res2.data.Company.Listings
                    });
                })
                .catch((error2) => {
                    console.log(error2);
                });

            })

            .catch((error) => {
                console.log(error);
            })
    }

    onDelete(event) {
        console.log(event);
        const token = localStorage.getItem('token');
        console.log(token);
        axios.delete(`${process.env.REACT_APP_API_BASE_URL}/listings/${event}`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        .then((res) => {
            console.log(res.data);
            /*this.setState({
                companyListing: 
            });*/
            // ***************
            //const token = localStorage.getItem('token');
            console.log(token);

            axios.post(`${process.env.REACT_APP_API_BASE_URL}/verify-token`, null, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })

                .then((res2) => {
                    console.log('Hej 1');
                    console.log(res.data);
                    axios.get(`${process.env.REACT_APP_API_BASE_URL}/company-listings/${res2.data.userId}`, {
                        headers: {
                            'Authorization': 'Bearer ' + token
                        }
                    })
                    .then((res3) => {
                        console.log('Hej 2');
                        console.log(res3.data.Company.Listings);
                        this.setState({
                            companyListing: res3.data.Company.Listings
                        });
                    })
                    .catch((error3) => {
                        console.log(error3);
                    });

                })

                .catch((error) => {
                    console.log(error);
                })
            // ***************
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 companyLoggedInFreeBanner"></div>
                    <div className="col-12 justify-content-center">
                        <Button url="/company_listing_create" name="Lägg till annonser" />
                    </div>
                    <div className="col-12">Dina annonser:</div>
                    {
                        this.state.companyListing.length > 0 ? 
                    this.state.companyListing.map((compList) => (
                        <div key={compList.id} className="col-12">
                            <div className="row">
                                <div className="col-2">{compList.title}</div>
                                <div className="col-3">{compList.pub_date}</div>
                                <div className="col-3">{compList.information_listing}</div>
                                <div className="col-2">{compList.intern_amount}</div>
                                <div className="col-1 mb-1"><Link className="btn btn-success btn-sm" to={'/company_listing_edit/' + compList.id}>Edit</Link></div>
                                <div className="col-1 mb-1"><button className="btn btn-danger btn-sm" onClick={() => {this.onDelete(compList.id)}}>Delete</button></div>
                            </div>
                        </div>
                    ))
                    :
                    <div className="col-12">Du har inga annonser skapade ännu...</div>
                    }
                </div>
            </div>
        );
    }
}

export default companyLoggedInFree;