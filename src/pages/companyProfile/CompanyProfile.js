import React from 'react';
import companyExampleBanner from "../images/companyExampleBanner.jpg";
import companyExampleLogo from '../images/companyExampleLogo.png';
import './CompanyProfile.css';
import CompanyProfileDescription from './CompanyProfileDescription';

 
class CompanyProfile extends React.Component {
    render() {
        return(
            <div className="companyProfile__container--height">
                <div className="companyProfile__banner"></div>
                <div className="container shadow company-profile__container ">
                    <div className="row border-bottom">
                        {/* <div className="col-4">
                            <img className
                            ="companyProfile__logo" src={companyExampleLogo}/>
                        </div> */}
                        <div className="container" >
                            <div className="row">
                                <div className="companyProfile__logo--2 col-5"></div>
                                    <div className="d-flex align-items-center">
                                        <ul className="col list-unstyled mr-8">
                                            <li className="font-weight-bold">My Company</li>
                                            <li>Stad: </li>
                                            <li>Adress: </li>
                                            <li>E-mail: </li>
                                            <li>Hemsida: </li>
                                        </ul>
                                    </div>  
                            </div>
                        </div>                
                    </div>
                    <CompanyProfileDescription />
                </div>
            </div>
        );
    }
}

export default CompanyProfile;