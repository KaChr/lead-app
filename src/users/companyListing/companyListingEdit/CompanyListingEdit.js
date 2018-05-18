import React from 'react';
import Button_Danger from '../../../Components/Button/Button_Danger/Button_Danger';
import Button_Function from '../../../Components/Button/Button_Function/Button_Function';
import './CompanyListingEdit.css';

class CompanyListingEdit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: '',
            title: '',
            pubDate: '',
            tasks: '',
            internAmount: '',
            city: '',
            adress: '',
            mail: '',
            errorMessages: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        console.log(event.target);
        event.preventDefault();

        const errorMessages = [];

        if (this.state.companyName === '') {
            errorMessages.push('Company name is required');
        }
        if (this.state.title === '') {
            errorMessages.push('Title is required');
        }
        if (this.state.pubDate === '') {
            errorMessages.push('Published date is required');
        }
        if (this.state.tasks === '') {
            errorMessages.push('Tasks is required');
        }
        if (this.state.internAmount === '') {
            errorMessages.push('Amount of intern is required');
        }
        if (this.state.city === '') {
            errorMessages.push('City name is required');
        }
        if (this.state.adress === '') {
            errorMessages.push('Adress is required');
        }
        if (this.state.mail === '') {
            errorMessages.push('Mail is required');
        }

        this.setState({
            errorMessages: errorMessages

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
                            <input onChange={this.onChange} value={this.state.companyName} type="name" className="form-control" name="companyName" id="companyName" placeholder="Företags namn..." />
                        </div>
                        <div className="form-group">
                            <input onChange={this.onChange} value={this.state.title} type="title" className="form-control" name="title" id="title" placeholder="Titel..." />
                        </div>
                        <div className="form-group">
                            <input onChange={this.onChange} value={this.state.pubDate} type="pub" className="form-control" name="pubDate" id="pub" placeholder="Publikations datum..." />
                        </div>
                        <div>
                            <div className="form-group">

                                <textarea onChange={this.onChange} value={this.state.tasks} className="form-control" name="tasks" placeholder="Information arbetsuppgifter..." rows="3"></textarea>
                            </div>
                            <div className="form-group">
                                <input onChange={this.onChange} value={this.state.internAmount} type="platser" className="form-control" name="internAmount" id="platser" placeholder="Antal platser..." />
                            </div>
                            <div className="form-group">
                                <input onChange={this.onChange} value={this.state.city} type="ort" className="form-control" name="city" id="ort" placeholder="Ort..." />
                            </div>
                            <div className="form-group">
                                <input onChange={this.onChange} value={this.state.adress} type="adress" className="form-control" name="adress" id="adress" placeholder="Adress..." />
                            </div>
                            <div className="form-group">
                                <input onChange={this.onChange} value={this.state.mail} type="mail" className="form-control" name="mail" id="mail" placeholder="Mail..." />
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