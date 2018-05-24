import React from 'react';
import './Button_Danger.css';

class Button_Danger extends React.Component {
    render() {
        return (

            <a href={this.props.url}><button className="button-danger" onClick={this.props.button_danger_action}>{this.props.button_danger_content}</button></a>

        )
    }
};

export default Button_Danger;