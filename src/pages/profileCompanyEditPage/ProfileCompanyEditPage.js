import React from 'react';
import './ProfileCompanyEditPage.css';

class ProfileCompanyEditPage extends React.Component {
    render() {
        return(
            <div className="container">
                <form className="">
                    <div className="form-group">
                        <label for="">Ladda upp backgrundsbild:</label>
                        <input className="form-control form__input--black" type="file"/>
                    </div>
                    <div className="form-group">
                        <label for="">Ladda upp logotyp:</label>
                        <input className="form-control form__input--black" type="file"/>
                    </div>
                    <div className="form-group">
                        <label for="companyName">Företagsname:</label>
                        <input className="form-control form__input--black" id="companyName" type="text" value=""/>
                    </div>
                    <div className="form-group">
                        <label for="aboutCompany">Om företaget:</label>
                        <textarea className="form-control form__input--black" id="aboutCompany"></textarea>    
                    </div>
                    <div className="form-group">
                        <label for="city">Stad:</label>
                        <input className="form-control form__input--black" id="city" type="text" value="dsfsdfjjj"/>    
                    </div>
                    <div className="form-group">
                        <label for="adress">Adress:</label>
                        <input className="form-control form__input--black" id="adress" type="text" value=""/>    
                    </div>
                    <div className="form-group">
                        <label for="postalcode">Postadress:</label>
                        <input className="form-control form__input--black" id="postalcode" type="text" value=""/>    
                    </div>
                    <div className="form-group">
                        <label for="e-mail">E-mail:</label>
                        <input className="form-control form__input--black" id="e-mail" type="text" value=""/>    
                    </div>
                    <div className="form-group">
                        <label for="website">Hemsida:</label>
                        <input className="form-control form__input--black" id="website" type="text" value=""/>    
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