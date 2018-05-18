import React from 'react'


class RegisterSchool extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            email: "",
            password: "",
            errorMessages: []
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

    }

    onSubmit(event) {
        console.log(event.target);
        event.preventDefault();

        const errorMessages = [];

        if (this.state.name === '') {
            errorMessages.push('School name is required');
        }
        if (this.state.email === '') {
            errorMessages.push('Email is required');
        }
        if (this.state.password === '') {
            errorMessages.push('Password is required');
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
            <div>
                <h2>Skola</h2>
                <form onSubmit={this.onSubmit} className="register-form school-form">
                    <input
                        type="text"
                        className="input-form form-control"
                        placeholder="Skolnamn"
                        value={this.state.name}
                        onChange={this.onChange}
                        name="name"
                    />
                    <input
                        type="email"
                        className="input-form form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                    />
                    <input
                        type="password"
                        className="input-form form-control"
                        placeholder="Lösenord"
                        value={this.state.password}
                        onChange={this.onChange}
                        name="password"
                    />
                    <input
                        type="password"
                        className="input-form form-control"
                        placeholder="Upprepa lösenord"
                    />
                    <p className="register-paragraph">Har du redan ett konto? Logga in <a href="/login">Här</a>.</p>
                    <div className="justify-content-center text-center register-btn-content">
                        <div className="col button">
                            <input type="submit" className="btn btn-danger"></input>
                        </div>
                        <div className="col">
                            <a className="cancel-register" href="/">Avbryt</a>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterSchool 