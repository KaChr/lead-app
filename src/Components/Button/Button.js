import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (
            <a href="https://google.com"><button>{this.props.name}</button></a>
        )
    }
};

export default Button;