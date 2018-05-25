import React from 'react';
import { Link } from 'react-router-dom';
import './LoggedInStudent.css';
import CompanyListing from '../companyListing/CompanyListing';
import CompanyAdvertisement from '../../companies/CompanyAdvertisement';
import ModalWindow from '../../modalWindow/ModalWindow';
import FilterListing from '../filterListing/FilterListing';
import SearchSection from '../searchSection/SearchSection';
import { Authorization } from '../../Components/Helper/Authorization';

class LoggedInStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: 'student'
        };
    }

    componentDidMount() {
        Authorization(this);
    }

    render() {
        return (
            <div className="container logged-in-student">
                <div className="row">
                    <div className="col-12 mb-3 logged-in-student-header">Logged In Student</div>
                    <div className="col-12"><Link className="btn btn-danger btn-sm" to={'/Student_Profile'}>Student profile</Link></div>
                    <div className="col-12 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor optio minima nihil ut dolorum quaerat est tempore, nobis quia aliquid. Quisquam fugit porro nam consectetur maxime quae velit eius a?</div>
                </div>
                <SearchSection />
                <FilterListing />
                <CompanyListing />
                <ModalWindow component={<CompanyAdvertisement />} />
            </div>
        );
    }
}

export default LoggedInStudent;