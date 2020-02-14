import React, {Component} from 'react';

export default class Task extends Component {

    render() {
        return (
            <>
                <input id={this.props.index} onChange={() => this.props.changeDone(this.props.index)}
                    type="checkbox" defaultChecked={this.props.task.done}/>
                <label htmlFor={this.props.index}>{this.props.task.text}</label>
            </>
        );
    }
}