import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Logga In</h1>
                <form>
                    <input type="text" placeholder="Email"/>
                    <input type="password" placeholder="Lösenord" />
                </form>
            </div>
        );
    }
}

export default Login;