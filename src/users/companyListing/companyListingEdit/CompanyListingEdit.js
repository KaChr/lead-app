import React from 'react';
import axios from 'axios';
import Button_Danger from '../../../Components/Button/Button_Danger/Button_Danger';
import Button_Function from '../../../Components/Button/Button_Function/Button_Function';
import './CompanyListingEdit.css';

class CompanyListingEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            title: '',
            information_listing: '',
            intern_amount: '',
           
            errorMessages: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        console.log(event.target);
        event.preventDefault();

        const errorMessages = [];

        
        if (this.state.title === '') {
            errorMessages.push('Title is required');
        }
        if (this.state.information_listing === '') {
            errorMessages.push('Task is required');
        }
        if (this.state.intern_amount === '') {
            errorMessages.push('Amount of intern is required');
        }
       

        this.setState({
            errorMessages: errorMessages

        });
        const token = localStorage.getItem('token');
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/listings`, {
            
            
            "title": this.state.title,
            "information_listing": this.state.information_listing,
            "intern_amount": this.state.intern_amount,
            
             
            
      },{
          headers: {
            'Authorization': 'Bearer ' + token
          }
      })
      .then((response) => {
        console.log(response,);
      })
      .catch((error) => {
        console.log(error);
      });

    }

    onChange(event) {

        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    
    

    render() {
        return (
            <div className=" row">
                <div className=" company-listings-edit col-8 mb-4 mt-5">
                    {this.state.errorMessages.map((error) => (
                        <div key={error}>{error}</div>
                    ))}
                    <form onSubmit={this.onSubmit}>
                        
                        <div className="form-group">
                            <input onChange={this.onChange} value={this.state.title} type="title" className="form-control" name="title" id="title" placeholder="Titel..." />
                        </div>
                        <div>
                            <div className="form-group">

                                <textarea onChange={this.onChange} value={this.state.information_listing} className="form-control" name="information_listing" placeholder="Information arbetsuppgifter..." rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <input onChange={this.onChange} value={this.state.intern_amount} type="platser" className="form-control" name="intern_amount" id="platser" placeholder="Antal platser..." />
                            </div>
                            
                           
                            

                        </div>


                        <Button_Function button_content="Spara" />
                        <Button_Danger button_danger_content="Avbryt" />

                    </form>
                </div>
            </div>
        );
    }

}

export default CompanyListingEdit