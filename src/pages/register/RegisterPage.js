import React from 'react';
import './RegisterPage.css';
import RegisterStudent from './registerStudent/RegisterStudent'
import RegisterSchool from './registerSchool/RegisterSchool';
import RegisterCompany from './registerCompany/RegisterCompany';
import Button from '../../Components/Button/Button';

class RegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            registerState: 0
        };
        this.onClickStudent = this.onClickStudent.bind(this);
        this.onClickSchool = this.onClickSchool.bind(this);
        this.onClickCompany = this.onClickCompany.bind(this);
    }

    onClickStudent() {
        this.setState({
            registerState: 1
        })
    }
    onClickSchool() {
        this.setState({
            registerState: 2
        })
    }
    onClickCompany() {
        this.setState({
            registerState: 3
        })
    }

    render() {
        return (
            <div className="register-page bg d-flex align-items-center">
                <div className="container container-small bg-transparent-black-register">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="text-center register-header">Registrera dig</h1>
                            <div className="type-of-user">
                                <p className="type-of-user-text">Vilken typ av användare är du?</p>
                                <ul className="type-of-user-buttons">
                                    <li><button className="type-of-user-button" name="Student" onClick={this.onClickStudent}>Student</button></li>
                                    <li><button className="type-of-user-button" name="Skola" onClick={this.onClickSchool}>Skola</button></li>
                                    <li><button className="type-of-user-button" name="Företag" onClick={this.onClickCompany}>Företag</button></li>
                                </ul>
                            </div>
                            {this.state.registerState === 1 && <RegisterStudent />}
                            {this.state.registerState === 2 && <RegisterSchool />}
                            {this.state.registerState === 3 && <RegisterCompany />}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;