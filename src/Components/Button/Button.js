import React from 'react';
import './Button.css';

class Button extends React.Component {
    render() {
        return (

            <a href={this.props.url}><button className="component-button">{this.props.name}</button></a>

        )
    }
};

export default Button;