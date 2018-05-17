import React from 'react';
import './Button_Danger.css';

class Button_Danger extends React.Component {
    render() {
        return (

            <button className="button-danger" onClick={this.props.button_danger_action}>{this.props.button_danger_content}</button>

        )
    }
};

export default Button_Danger;