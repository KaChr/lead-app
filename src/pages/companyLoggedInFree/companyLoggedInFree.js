import React from 'react';
import axios from 'axios';
import './companyLoggedInFree.css';


import Button from '../../Components/Button/Button';
import '../../Components/Button/Button.css';
import { Authorization } from '../../Components/Helper/Authorization';



class companyLoggedInFree extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            companyListing : []
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
                console.log(res.data);
                //axios.get(`${process.env.REACT_APP_API_BASE_URL}/company-listings/${res.data.userId}`)

            })

            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12 companyLoggedInFreeBanner"></div>
                    <div className="justify-content-center">
                        <Button url="/company_listing_edit" name="Lägg till annonser" />
                    </div>
                </div>
                <div className="">
                    <p>Dina annonser:</p>
                </div>
            </div>
        );
    }
}

    export default companyLoggedInFree;