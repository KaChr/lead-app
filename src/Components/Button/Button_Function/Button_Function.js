import React from 'react';
import './Button_Function.css';

class Button_Function extends React.Component {
    render() {
        return (

            <button href={this.props.url} className="button_function" onClick={this.props.button_action}>{this.props.button_content}</button>

        )
    }
};

export default Button_Function;