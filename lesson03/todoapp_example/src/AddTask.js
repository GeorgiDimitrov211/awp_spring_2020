import React, {Component} from 'react';

export default class AddTask extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: "" // Input from the text field is stored here
        };
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }

    handleButtonClick(event) {
        this.props.addTask(this.state.input);
    }

    render() {
        return (
            <>
                <input type="text" placeholder="Fetch kids from school"
                       onChange={(event) => this.handleChange(event)}/>
                <button onClick={(event) => this.handleButtonClick(event)}>Add Task</button>
            </>
        );
    }
}


