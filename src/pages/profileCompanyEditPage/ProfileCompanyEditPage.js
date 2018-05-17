import React from 'react';
import './ProfileCompanyEditPage.css';

class ProfileCompanyEditPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            companyName: '',
            city: '',
            adress: '',
            postalcode: '',
            email: '',
            website: ''

        }
    }

    

    render() {
        return(
            <div className="container">
                <form className="">
                    <div className="form-group">
                        <label for="">Ladda upp backgrundsbild:</label>
                        <input className="form-control form__input--black" name="" type="file"/>
                    </div>
                    <div className="form-group">
                        <label for="">Ladda upp logotyp:</label>
                        <input className="form-control form__input--black" name="" type="file"/>
                    </div>
                    <div className="form-group">
                        <label for="companyNameId">Företagsname:</label>
                        <input className="form-control form__input--black" name="companyName" id="companyNameId" type="text" value=""/>
                    </div>
                    <div className="form-group">
                        <label for="aboutCompanyId">Om företaget:</label>
                        <textarea className="form-control form__input--black" name="aboutCompany" id="aboutCompanyId"></textarea>    
                    </div>
                    <div className="form-group">
                        <label for="cityId">Stad:</label>
                        <input className="form-control form__input--black" name="city" id="cityId" type="text" value=""/>    
                    </div>
                    <div className="form-group">
                        <label for="adressId">Adress:</label>
                        <input className="form-control form__input--black" name="adress" id="adressId" type="text" value=""/>    
                    </div>
                    <div className="form-group">
                        <label for="postalcodeId">Postadress:</label>
                        <input className="form-control form__input--black" name="postalcode" id="postalcodeId" type="text" value=""/>    
                    </div>
                    <div className="form-group">
                        <label for="emailId">E-mail:</label>
                        <input className="form-control form__input--black" name="email" id="emailId" type="text" value=""/>    
                    </div>
                    <div className="form-group">
                        <label for="websiteId" >Hemsida:</label>
                        <input className="form-control form__input--black" name="website" id="websiteId" type="text" value=""/>    
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