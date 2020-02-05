import React, {Component} from 'react';

class InputTextExample extends Component {

    constructor(props) {
        super(props);
        // This is out initial state (which is just an empty property named 'input')
        this.state = {input: ""};
    }

    onChange(event) {
        // We can only change state using this.setState() and replace the current state with something new.
        this.setState({
            input: event.target.value // We replace input with the current value of target.
            // event.target.value is the contents of the HTML input tag.
        })
    }

    render() {
        return (
            // React.Fragment is a nice way to group HTML tags without using a div.
            // It doesn't create a new DOM element in practice (unlike div).
            <React.Fragment>
                {
                    // We use the onChange attribute to attach an event listener to whenever the contents
                    // of the input tag changes. Remember to always use an arrow function here.
                }
                <input onChange={(event) => this.onChange(event)} type="text"/>

                {
                    // Print out the current input state value in the HTML inside <p>
                }
                <p>The contents of <strong>this.state.input</strong>: {this.state.input}</p>
            </React.Fragment>
        );
    }
}

export default InputTextExample;
