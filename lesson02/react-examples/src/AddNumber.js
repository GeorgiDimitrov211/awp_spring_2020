import React, {Component} from 'react';

class AddNumber extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sum: 0,
            input: ""
        }
    }

    onClick(event) {
        let newSum = this.state.sum + parseInt(this.state.input);
        this.setState({
            sum: newSum
        })
    }

    onChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return (
            <>
                <h3>Add Number</h3>
                <input onChange={
                    (event) => this.onChange(event)} type="text"/>
                <button onClick={
                    (event) => this.onClick(event)}>Add Number</button>
                <p>Sum: {this.state.sum}</p>
            </>
        );
    }
}

export default AddNumber;
