import React from 'react';
import './ProfileCompanyEditPage.css';

class ProfileCompanyEditPage extends React.Component {
    render() {
        return(
            <div className="container">
                <form className="">
                    <div class="form-group">
                        <label for="companyName">Ladda upp backgrundsbild:</label>
                        <input class="form-control" type="file"/>
                    </div>
                    <div class="form-group">
                        <label for="companyName">Ladda upp logotyp:</label>
                        <input class="form-control" type="file"/>
                    </div>
                    <div class="form-group">
                        <label for="companyName">Företagsname:</label>
                        <input class="form-control" id="companyName" type="text" value=""/>
                    </div>
                    <div class="form-group">
                        <label for="aboutCompany">Om företaget:</label>
                        <textarea class="form-control" id="aboutCompany"></textarea>    
                    </div>
                    <div class="form-group">
                        <label for="city">Stad:</label>
                        <input class="form-control" id="city" type="text" value=""/>    
                    </div>
                    <div class="form-group">
                        <label for="adress">Adress:</label>
                        <input class="form-control" id="adress" type="text" value=""/>    
                    </div>
                    <div class="form-group">
                        <label for="postalcode">Postadress:</label>
                        <input class="form-control" id="postalcode" type="text" value=""/>    
                    </div>
                    <div class="form-group">
                        <label for="e-mail">E-mail:</label>
                        <input class="form-control" id="e-mail" type="text" value=""/>    
                    </div>
                    <div class="form-group">
                        <label for="website">Hemsida:</label>
                        <input class="form-control" id="website" type="text" value=""/>    
                    </div>
                    <div>
                        <button className="btn btn-success" type="submit">Spara</button>
                        <button className="btn btn-danger">Avbryt</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ProfileCompanyEditPage