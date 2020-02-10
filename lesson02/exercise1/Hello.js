import React, {Component} from 'react';

class Hello extends Component {
    render() {
        return (
            <p>
                Welcome {this.props.helloName}
            </p>
        );
    }
}

export default Hello;

