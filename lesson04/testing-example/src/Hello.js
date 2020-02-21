import React, {Component} from 'react';

class Hello extends Component {
    render() {
        return (
            <p>Hello {this.props.just_a_name}.</p>
        );
    }
}

export default Hello;
