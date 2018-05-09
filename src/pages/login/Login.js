import React from 'react';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="login-page bg d-flex align-items-center">
                <div className="container container-small bg-transparent-black">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="text-center login-header">Logga In</h1>
                            <form className="login-form" method="post">
                                <input type="text" name="email" className="input-form form-control" placeholder="Email" />
                                <input type="password" name="password" className="input-form form-control" placeholder="Lösenord" />
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