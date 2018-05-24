import React from 'react';
import './companyLoggedInFree.css';

import Button from '../../Components/Button/Button';
import '../../Components/Button/Button.css';



class companyLoggedInFree extends React.Component {


    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-12 companyLoggedInFreeBanner"></div>
                    <div className="justify-content-center">
                    <Button url="/company_listing_edit" name="Lägg till annonser"/>
                    
                        
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