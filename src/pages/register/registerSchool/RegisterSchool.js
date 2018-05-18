import React from 'react'


class RegisterSchool extends React.Component {
    render() {
        return (
            <div>
                <h2>Skola</h2>
                <form className="register-form school-form">
                    <input type="text" className="input-form form-control" placeholder="Skolnamn" />
                    <input type="email" className="input-form form-control" placeholder="Email" />
                    <input type="password" className="input-form form-control" placeholder="Lösenord" />
                    <input type="password" className="input-form form-control" placeholder="Upprepa lösenord" />
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