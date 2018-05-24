import React from 'react';
import axios from 'axios';
import './Login.css';




class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            errorMessages: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }





    onSubmit(event) {
        console.log(event.target);
        event.preventDefault();

        const errorMessages = [];

        if (this.state.email === '') {
            errorMessages.push('Email is required');
        }

        if (this.state.password === '') {
            errorMessages.push('Password is required')
        }

        axios.post('http://localhost:7770/login', {

            "email": this.state.email,
            "password": this.state.password
        })
            .then((res) => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);

                axios.post('http://localhost:7770/verify-token', null, {
                    headers: {
                        'Authorization': 'Bearer ' + res.data.token
                    }

                })
                    .then((res2) => {
                        console.log(res2.data);

                        axios.get('http://localhost:7770/user-type/' + res2.data.userId)

                            .then((res3) => {
                                console.log(res3.data);
                                // IF ELSE HERE TO REDIRECT TO THE CORRECT PAGE
                                if (res3.data.role === 'student') {
                                    this.props.history.push("/logged-in-student");
                                }
                                if (res3.data.role === 'company') {
                                    this.props.history.push("/logged_in_campany_free");
                                }
                                if (res3.data.role === 'school') {
                                    this.props.history.push("/logged-in-school-profile");

                                }
                            })
                            .catch((err3) => {
                                console.log(err3);
                            })

                    })
                    .catch((err2) => {
                        console.log(err2);
                    })


            })
            .catch((err) => {
                console.log(err)
            })

        this.setState({
            errorMessages: errorMessages
        });


    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="login-page bg d-flex align-items-center">
                <div className="container container-small bg-transparent-black">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="text-center login-header">Logga In</h1>
                            <form onSubmit={this.onSubmit} className="login-form">
                                <input onChange={this.onChange} value={this.state.email} type="email" className="input-form form-control input-form--color--white" name="email" placeholder="Email" />
                                <input onChange={this.onChange} value={this.state.password} type="password" className="input-form form-control input-form--color--white" name="password" placeholder="Lösenord" />
                                <p className="login-paragraph">Har du inget konto? Registrera dig <a href="register.html">Här</a>.</p>
                                <div className="justify-content-center text-center login-btn-content">
                                    <div className="col button">
                                        <input type="submit" value="Logga in" className="btn btn-danger"></input>
                                    </div>
                                    <div className="col">
                                        <a className="cancel-register" href="/">Avbryt</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;