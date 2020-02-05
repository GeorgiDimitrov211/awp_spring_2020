import React, {Component} from 'react';

class HelloExample extends Component {

    render() {
        // All this component does it saying hello to 'this.props.just_a_name'.
        return (
            <p>Hello {this.props.just_a_name}.</p>
        );
    }
}

export default HelloExample;
