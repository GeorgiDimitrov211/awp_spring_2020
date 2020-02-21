import React, {Component} from 'react';

class ButtonCallback extends Component {
    onClick(event) {
        this.props.callback();
    }

    render() {
        return (
            <button onClick={(event) => this.onClick(event)}>
                Click this button!
            </button>
        );
    }
}

export default ButtonCallback;
