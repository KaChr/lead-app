import React from 'react';
import './companyLoggedInFree.css';

class companyLoggedInFree extends React.Component {
    render() {
        return(
            <div>
                <div className="companyLoggedInFreeBanner"></div>
                <button className="btn btn-danger">Lägg till annons</button>
            </div>
        );
    }
}

export default companyLoggedInFree;