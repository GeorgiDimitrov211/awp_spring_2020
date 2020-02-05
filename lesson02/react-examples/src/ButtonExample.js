import React, {Component} from 'react';

class ButtonExample extends Component {

    constructor(props) {
        super(props);

        // This is the initial state. It is set when the component is created.
        this.state = {
            count: 0,
            buttonClicked: "The button is not clicked"
        };
    }

    // The click handler is invoked when the button is clicked
    onClick(event) {
        this.setState({ // The only way to change the state is to set a new state
            buttonClicked: 'The button is clicked', // We set a new text on buttonClicked
            count: this.state.count + 1 // count is set to previous count + 1
        })
    }

    render() {
        return (
            // Use onClick to attach an event handler to the button click.
            // Always use an arrow function - otherwise 'this' inside the event handler will not
            // be able to access the component state (meaning 'this.state.count')
            <button onClick={(event) => this.onClick(event)}>
                {// <- Curly brace start
                    // We use curly braces inside JSX to execute JavaScript as part of the rendering.
                    // In this case, we use JavaScript to decide what text is rendered inside a <button>.

                    // The JavaScript syntax below is called "template strings" (or literals)
                    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
                    `${this.state.buttonClicked}. Count: ${this.state.count}`
                }
            </button>
        );
    }
}

export default ButtonExample;
