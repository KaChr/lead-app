import React from 'react';
import { connect } from 'react-redux';
import './CompanyAdvertisement.css';

class CompanyAdvertisement extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center company-advertisement-main">Företags Logo</h1>
                    <p>{this.props.getCompanyAdvertisement.val1}</p>
                    <p>{this.props.getCompanyAdvertisement.val2}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps)(CompanyAdvertisement);