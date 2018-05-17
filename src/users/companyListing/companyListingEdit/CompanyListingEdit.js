import React from 'react';
import Button from '../../../Components/Button/Button';
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
            mail: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(event) {
        console.log(event.target);
        event.preventDefault();

    }

    onChange(event) {
        // this.setState({
        //     companyName: event.target.companyName,
        //     title: event.target.value,
        //     pubDate: event.target.value,
        //     tasks: event.target.value,
        //     internAmount: event.target.value,
        //     city: event.target.value,
        //     adress: event.target.value,
        //     mail: event.target.value
        // });
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="company-listings-edit-container">
                <form onSubmit={this.onSubmit}>
                    <div class="form-group">
                        <input onChange={this.onChange} value={this.state.companyName} type="name" className="form-control" name="companyName" id="companyName" placeholder="Företags namn..." />
                    </div>
                    <div class="form-group">
                        <input onChange={this.onChange} value={this.state.title} type="title" class="form-control"name="title" id="title" placeholder="Titel..." />
                    </div>
                    <div class="form-group">
                        <input onChange={this.onChange} value={this.state.pubDate} type="pub" class="form-control"name="pubDate" id="pub" placeholder="Publikations datum..." />
                    </div>
                    <div>
                        <div class="form-group">

                            <textarea onChange={this.onChange} value={this.state.tasks} class="form-control" name="tasks" placeholder="Information arbetsuppgifter..." rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <input onChange={this.onChange} value={this.state.internAmount} type="platser" class="form-control"name="internAmount" id="platser" placeholder="Antal platser..." />
                        </div>
                        <div class="form-group">
                            <input onChange={this.onChange} value={this.state.city} type="ort" class="form-control" name="city" id="ort" placeholder="Ort..." />
                        </div>
                        <div class="form-group">
                            <input onChange={this.onChange} value={this.state.adress} type="adress" class="form-control" name="adress" id="adress" placeholder="Adress..." />
                        </div>
                        <div class="form-group">
                            <input onChange={this.onChange} value={this.state.mail} type="mail" class="form-control" name="mail" id="mail" placeholder="Mail..." />
                        </div>

                    </div>

                    <Button name="spara" />
                    <Button name="avbryt" />
                </form>
            </div>
        );
    }

}

export default CompanyListingEdit