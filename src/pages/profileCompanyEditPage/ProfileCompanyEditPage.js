import React from 'react';
import './ProfileCompanyEditPage.css';

import Button_Danger from '../../Components/Button/Button_Danger/Button_Danger';
import Button_Function from '../../Components/Button/Button_Function/Button_Function';

class ProfileCompanyEditPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            aboutCompany: '',
            city: '',
            adress: '',
            postalcode: '',
            email: '',
            website: ''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        }) 
    }

    

    render() {
        return(
            <div className="container profile-company-edit-page-container">
                <form onSubmit={this.handleSubmit} className="col-9">
                    <div className="form-group ">
                        <label for="">Ladda upp backgrundsbild:</label>
                        <input className="form-control form__input--black" name="" type="file"/>
                    </div>
                    <div className="form-group">
                        <label for="">Ladda upp logotyp:</label>
                        <input className="form-control form__input--black" name="" type="file"/>
                    </div>
                    <div className="form-group">
                        <label for="companyNameId">Företagsname:</label>
                        <input onChange={this.handleChange} className="form-control form__input--black" name="companyName" id="companyNameId" type="text" value={this.state.companyName}/>
                    </div>
                    <div className="form-group">
                        <label for="aboutCompanyId">Om företaget:</label>
                        <textarea onChange={this.handleChange} className="form-control form__input--black input-aboutCompany" name="aboutCompany" id="aboutCompanyId" value={this.state.aboutCompany}></textarea>    
                    </div>
                    <div className="form-group">
                        <label for="cityId">Stad:</label>
                        <input onChange={this.handleChange} className="form-control form__input--black" name="city" id="cityId" type="text" value={this.state.city}/>    
                    </div>
                    <div className="form-group">
                        <label for="adressId">Adress:</label>
                        <input onChange={this.handleChange} className="form-control form__input--black" name="adress" id="adressId" type="text" value={this.state.adress}/>    
                    </div>
                    <div className="form-group">
                        <label for="postalcodeId">Postadress:</label>
                        <input onChange={this.handleChange} className="form-control form__input--black" name="postalcode" id="postalcodeId" type="text" value={this.state.postalcode}/>    
                    </div>
                    <div className="form-group">
                        <label for="emailId">E-mail:</label>
                        <input onChange={this.handleChange} className="form-control form__input--black" name="email" id="emailId" type="email" value={this.state.email}/>    
                    </div>
                    <div className="form-group">
                        <label for="websiteId" >Hemsida:</label>
                        <input onChange={this.handleChange} className="form-control form__input--black" name="website" id="websiteId" type="text" value={this.state.website}/>    
                    </div>
                    <div>
                        <Button_Function button_content="Spara" />
                        <Button_Danger button_danger_content="Avbryt" />
                    </div>
                </form>
            </div>
        );
    }
}

export default ProfileCompanyEditPage